import { LitElement, html, nothing, type PropertyValues, type TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import type {
  ActionConfig,
  AreaPulseCardConfig,
  AreaRegistryEntry,
  GroupId,
  HassEntity,
  HomeAssistant,
} from "./types";
import {
  buildGroups,
  comfortState,
  DEFAULT_GROUPS,
  DEFAULT_TOP_GROUPS,
  findMainLight,
  indexArea,
  lightColor,
  reading,
  watchedEntities,
  type AreaIndex,
  type Group,
  type Reading,
} from "./discovery";
import { cssColor, resolveAction, type ResolvedAction } from "./presets";
import { actionHandler, type ActionKind } from "./action-handler";
import { localize } from "./localize";
import { cardStyles } from "./styles";
import { popupStyles } from "./popup-styles";
import "./editor";

const VERSION = "1.1.0";

interface GroupMeta {
  icon: string;
  iconOff: string;
  color: string;
}

const GROUP_META: Record<GroupId, GroupMeta> = {
  presence: { icon: "mdi:account", iconOff: "mdi:account-outline", color: "var(--apc-green)" },
  motion: { icon: "mdi:motion-sensor", iconOff: "mdi:motion-sensor-off", color: "var(--apc-cyan)" },
  doors: { icon: "mdi:door-open", iconOff: "mdi:door-closed", color: "var(--apc-orange)" },
  windows: { icon: "mdi:window-open-variant", iconOff: "mdi:window-closed-variant", color: "var(--apc-orange)" },
  covers: { icon: "mdi:window-shutter-open", iconOff: "mdi:window-shutter", color: "var(--apc-purple)" },
  locks: { icon: "mdi:lock-open-variant", iconOff: "mdi:lock", color: "var(--apc-deep-orange)" },
  lights: { icon: "mdi:lightbulb-on", iconOff: "mdi:lightbulb-outline", color: "var(--apc-amber)" },
  fans: { icon: "mdi:fan", iconOff: "mdi:fan-off", color: "var(--apc-light-blue)" },
  switches: { icon: "mdi:power-socket-eu", iconOff: "mdi:power-plug-off-outline", color: "var(--apc-teal)" },
  media: { icon: "mdi:play-circle", iconOff: "mdi:speaker", color: "var(--apc-indigo)" },
  climate: { icon: "mdi:thermostat", iconOff: "mdi:thermostat", color: "var(--apc-deep-orange)" },
  alerts: { icon: "mdi:alert", iconOff: "mdi:shield-check", color: "var(--apc-red)" },
  batteries: { icon: "mdi:battery-alert-variant-outline", iconOff: "mdi:battery", color: "var(--apc-red)" },
};

const SENSOR_ICONS: Record<string, string> = {
  illuminance: "mdi:brightness-5",
  carbon_dioxide: "mdi:molecule-co2",
  pm25: "mdi:blur",
  pm10: "mdi:blur-radial",
  volatile_organic_compounds: "mdi:air-filter",
  volatile_organic_compounds_parts: "mdi:air-filter",
  pressure: "mdi:gauge",
  power: "mdi:flash",
  energy: "mdi:lightning-bolt",
  sound_pressure: "mdi:waveform",
  temperature: "mdi:thermometer",
  humidity: "mdi:water-percent",
};

const DEFAULT_ICON = "mdi:texture-box";

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
  interface HTMLElementTagNameMap {
    "area-pulse-card": AreaPulseCard;
  }
}

export class AreaPulseCard extends LitElement {
  static styles = [cardStyles, popupStyles];

  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ reflect: true }) layout: "default" | "compact" = "default";
  @property({ type: Boolean, reflect: true }) dark = false;
  @state() private _config?: AreaPulseCardConfig;
  /** Group shown in the popup. */
  @state() private _popup?: GroupId;
  /** Native tile cards for the popup; null means HA's card helpers are unavailable and fallback tiles are drawn. */
  @state() private _tiles?: HTMLElement[] | null;
  /** Popup to restore after a more-info dialog opened from it is closed. */
  private _reopen?: GroupId;
  private _onDialogClosed = () => {
    if (this._reopen) {
      const id = this._reopen;
      this._reopen = undefined;
      this._openPopup(id);
    }
  };

  private _index?: AreaIndex;
  private _indexDeps: unknown[] = [];
  private _watched = new Set<string>();
  private _ticker?: number;

  // ---- Lovelace API -------------------------------------------------------

  static getConfigElement() {
    return document.createElement("area-pulse-card-editor");
  }

  static getStubConfig(hass: HomeAssistant): Partial<AreaPulseCardConfig> {
    const areas = Object.values(hass?.areas ?? {});
    return {
      area: areas[0]?.area_id ?? "",
      actions: [{ preset: "lights_toggle" }, { preset: "everything_off" }],
    };
  }

  setConfig(config: AreaPulseCardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    if (config.actions && !Array.isArray(config.actions)) throw new Error("`actions` must be a list");
    this._config = { ...config };
    this.layout = config.layout === "compact" ? "compact" : "default";
    this._popup = undefined;
    this._indexDeps = [];
  }

  getCardSize(): number {
    const actions = this._config?.actions?.length ? 1 : 0;
    return this.layout === "compact" ? 2 + actions : 3 + actions;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" as const };
  }

  // ---- Lifecycle ----------------------------------------------------------

  connectedCallback(): void {
    super.connectedCallback();
    // Keeps "for 12 min" labels fresh without depending on state changes.
    this._ticker = window.setInterval(() => this.requestUpdate(), 30_000);
    window.addEventListener("dialog-closed", this._onDialogClosed);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._ticker) window.clearInterval(this._ticker);
    window.removeEventListener("dialog-closed", this._onDialogClosed);
  }

  protected shouldUpdate(changed: PropertyValues): boolean {
    if (!this._config) return false;
    if (!changed.has("hass") || changed.size > 1) return true;
    const old = changed.get("hass") as HomeAssistant | undefined;
    const hass = this.hass;
    // Popup tiles are real cards: keep them live even when nothing on this card changed.
    if (hass && this._tiles) for (const t of this._tiles) (t as unknown as { hass: HomeAssistant }).hass = hass;
    if (!old || !hass) return true;
    if (
      old.entities !== hass.entities ||
      old.devices !== hass.devices ||
      old.areas !== hass.areas ||
      old.locale !== hass.locale ||
      old.language !== hass.language ||
      old.themes !== hass.themes
    ) {
      return true;
    }
    for (const id of this._watched) if (old.states[id] !== hass.states[id]) return true;
    return false;
  }

  protected willUpdate(): void {
    const hass = this.hass;
    const config = this._config;
    if (!hass || !config) return;
    this.dark = !!hass.themes?.darkMode;
    const deps = [hass.entities, hass.devices, hass.areas, config];
    if (!this._index || deps.some((d, i) => d !== this._indexDeps[i])) {
      this._index = indexArea(hass, config.area, config.exclude_entities ?? []);
      this._indexDeps = deps;
      const area = hass.areas?.[config.area];
      this._watched = watchedEntities(config, this._index);
      if (area?.temperature_entity_id) this._watched.add(area.temperature_entity_id);
      if (area?.humidity_entity_id) this._watched.add(area.humidity_entity_id);
    }
  }

  // ---- Render -------------------------------------------------------------

  protected render(): TemplateResult | typeof nothing {
    const hass = this.hass;
    const config = this._config;
    if (!hass || !config) return nothing;
    if (!config.area) return this._warning(localize(hass, "pick_area"));
    const area = hass.areas?.[config.area];
    if (!area) return this._warning(localize(hass, "area_not_found", { area: config.area }));
    const index = this._index ?? indexArea(hass, config.area, config.exclude_entities ?? []);

    const groups = buildGroups(hass, config, index);
    const temperature = reading(hass, index, "temperature", config.temperature_entity ?? area.temperature_entity_id);
    const humidity = reading(hass, index, "humidity", config.humidity_entity ?? area.humidity_entity_id);
    const extras = (config.sensor_classes ?? [])
      .map((c) => reading(hass, index, c))
      .filter((r): r is Reading => !!r);
    const actions = (config.actions ?? []).map((a) => resolveAction(hass, a, area, groups, index));

    const presence = groups.presence;
    const occupied = !!presence?.active.length;
    const alerts = groups.alerts?.active ?? [];
    const accent = config.color ? cssColor(config.color) : undefined;
    const showPicture = config.show_picture !== false && !!area.picture;
    const headerHasAction = this._hasAction(config.tap_action) || this._hasAction(config.hold_action);

    // Main light drives the icon and the ambient glow colour.
    const mainLight = findMainLight(hass, config, index);
    const mainState = mainLight ? hass.states[mainLight] : undefined;
    const mainOn = mainState?.state === "on";
    const glowSource = mainOn
      ? mainState
      : (groups.lights?.active ?? []).map((id) => hass.states[id]).find((s) => !!s);
    const glowRgb = glowSource ? lightColor(glowSource) ?? [255, 193, 7] : undefined;
    const brightness = Number(glowSource?.attributes.brightness ?? 255);
    const glowStrength = 0.1 + 0.12 * Math.min(1, Math.max(0, brightness / 255));
    const mainRgb = mainOn ? lightColor(mainState) ?? [255, 193, 7] : undefined;

    const cardStyle: Record<string, string> = {};
    if (accent) cardStyle["--apc-accent"] = accent;
    if (glowRgb) {
      cardStyle["--apc-glow-rgb"] = glowRgb.join(",");
      cardStyle["--apc-glow-alpha"] = glowStrength.toFixed(3);
    }
    if (mainRgb) cardStyle["--apc-light-rgb"] = mainRgb.join(",");
    const colors = config.colors ?? {};
    if (colors.temperature_low) cardStyle["--apc-temp-low"] = cssColor(colors.temperature_low);
    if (colors.temperature_high) cardStyle["--apc-temp-high"] = cssColor(colors.temperature_high);
    if (colors.humidity_low) cardStyle["--apc-hum-low"] = cssColor(colors.humidity_low);
    if (colors.humidity_high) cardStyle["--apc-hum-high"] = cssColor(colors.humidity_high);

    const iconClasses = {
      "area-icon": true,
      occupied: occupied && !mainLight,
      linked: !!mainLight,
      "light-on": mainOn,
    };
    const icon = html`<ha-icon .icon=${config.icon || area.icon || DEFAULT_ICON}></ha-icon>`;
    const dot = occupied ? html`<span class="presence-dot"></span>` : nothing;

    return html`
      <ha-card class=${classMap({ alerting: alerts.length > 0 })} style=${styleMap(cardStyle)}>
        ${showPicture ? html`<div class="picture" style=${styleMap({ backgroundImage: `url("${area.picture}")` })}></div>` : nothing}
        <div class=${classMap({ glow: true, on: !!glowRgb })}></div>
        <div class="content">
          <div
            class=${classMap({ header: true, clickable: headerHasAction })}
            role=${headerHasAction ? "button" : nothing}
            tabindex=${headerHasAction ? "0" : nothing}
            ${actionHandler({
              hasHold: this._hasAction(config.hold_action),
              hasDoubleTap: this._hasAction(config.double_tap_action),
              disabled: !headerHasAction,
            })}
            @apc-action=${(ev: CustomEvent) => this._cardAction(ev.detail.action)}
          >
            ${mainLight
              ? html`<div
                  class=${classMap(iconClasses)}
                  role="button"
                  tabindex="0"
                  aria-pressed=${String(mainOn)}
                  aria-label=${localize(hass, "toggle_light", { name: this._entityName(mainState) })}
                  title=${this._entityName(mainState)}
                  ${actionHandler({ hasHold: true })}
                  @apc-action=${(ev: CustomEvent) => this._mainLightAction(mainLight, ev.detail.action)}
                  @pointerdown=${this._stop}
                  @pointerup=${this._stop}
                  @click=${this._stop}
                  @keydown=${this._stop}
                >
                  ${icon}${dot}
                </div>`
              : html`<div class=${classMap(iconClasses)}>${icon}${dot}</div>`}
            <div class="titles">
              <div class="name">${config.name || area.name}</div>
              <div class="secondary">${this._secondary(groups)}</div>
            </div>
            ${this._renderClimate(temperature, humidity)}
          </div>
          ${alerts.length ? this._renderAlertBanner(alerts) : nothing}
          ${this._renderChips(groups, extras)}
          ${actions.length ? this._renderActions(actions) : nothing}
        </div>
      </ha-card>
      ${this._popup && groups[this._popup] ? this._renderPopup(groups[this._popup]!, area) : nothing}
    `;
  }

  private _stop = (ev: Event) => ev.stopPropagation();

  private _warning(text: string) {
    return html`<ha-card><div class="warning"><ha-icon icon="mdi:alert-outline"></ha-icon>${text}</div></ha-card>`;
  }

  private _secondary(groups: Partial<Record<GroupId, Group>>) {
    const hass = this.hass!;
    const parts: string[] = [];
    const presence = groups.presence;
    if (presence) {
      const occupied = presence.active.length > 0;
      const since = this._lastChange(occupied ? presence.active : presence.entities);
      const label = localize(hass, occupied ? "occupied" : "clear");
      parts.push(since !== undefined ? `${label} ${localize(hass, "for", { t: this._ago(since) })}` : label);
    }
    const lights = groups.lights;
    if (lights?.active.length) {
      parts.push(
        localize(hass, lights.active.length === 1 ? "light_on" : "lights_on_n", { n: lights.active.length })
      );
    }
    if (!parts.length) {
      const media = groups.media;
      if (media?.active.length) parts.push(localize(hass, "media_playing"));
    }
    return parts.map((p, i) => html`${i ? html`<span class="dot">·</span>` : nothing}${p}`);
  }

  private _renderClimate(temp?: Reading, hum?: Reading) {
    if (!temp && !hum) return nothing;
    const config = this._config!;
    const tempUnit = temp?.unit || "°";
    const tState = temp
      ? comfortState(temp.value, config.comfort_temperature, tempUnit.includes("F") ? [68, 76] : [19, 25])
      : "ok";
    const hState = hum ? comfortState(hum.value, config.comfort_humidity, [35, 65]) : "ok";
    return html`
      <div class="climate">
        ${temp
          ? html`<div
              class="temp ${tState}"
              title=${temp.entities.length > 1 ? `Median of ${temp.entities.length} sensors` : ""}
              @click=${(e: Event) => this._moreInfo(temp.entities[0], e)}
            >
              ${this._num(temp.value, 1)}<span class="unit">${tempUnit}</span>
            </div>`
          : nothing}
        ${hum
          ? html`<div class="hum ${hState}" @click=${(e: Event) => this._moreInfo(hum.entities[0], e)}>
              <ha-icon .icon=${hState === "low" ? "mdi:water-percent-alert" : "mdi:water-percent"}></ha-icon>${this._num(hum.value, 0)}${hum.unit}
            </div>`
          : nothing}
      </div>
    `;
  }

  private _renderAlertBanner(alerts: string[]) {
    const hass = this.hass!;
    const first = hass.states[alerts[0]];
    const text =
      alerts.length === 1
        ? `${this._entityName(first)} · ${this._formatState(first)}`
        : `${localize(hass, "alerts_n", { n: alerts.length })}: ${alerts
            .map((a) => this._entityName(hass.states[a]))
            .join(", ")}`;
    return html`
      <div
        class="alert-banner"
        role="alert"
        @click=${() => (alerts.length === 1 ? this._moreInfo(alerts[0]) : this._openPopup("alerts"))}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="text">${text}</span>
      </div>
    `;
  }

  private _renderChips(groups: Partial<Record<GroupId, Group>>, extras: Reading[]) {
    const config = this._config!;
    const order = (config.groups ?? DEFAULT_GROUPS).filter((g) => g !== "presence");
    const top = new Set(config.top_groups ?? DEFAULT_TOP_GROUPS);
    const showInactive = config.show_inactive === true;
    const row1: TemplateResult[] = [];
    const row2: TemplateResult[] = [];

    for (const id of order) {
      const group = groups[id];
      if (!group) continue;
      // Alerts already have a banner; batteries only matter when low.
      if (id === "alerts" && (this.layout !== "compact" || !group.active.length)) continue;
      if (id === "batteries" && !group.active.length) continue;
      if (!group.active.length && !showInactive) continue;
      (top.has(id) ? row1 : row2).push(this._groupChip(group));
    }
    // Passive readings close the second row.
    for (const r of extras) row2.push(this._statChip(r));

    if (!row1.length && !row2.length) return nothing;
    return html`
      <div class="chip-rows">
        ${row1.length ? html`<div class="chips">${row1}</div>` : nothing}
        ${row2.length ? html`<div class="chips">${row2}</div>` : nothing}
      </div>
    `
  }

  private _statChip(r: Reading) {
    let severity = "";
    if (r.deviceClass === "carbon_dioxide") severity = r.value >= 1500 ? "bad" : r.value >= 1000 ? "warn" : "";
    if (r.deviceClass === "pm25") severity = r.value >= 35 ? "bad" : r.value >= 12 ? "warn" : "";
    const digits = Math.abs(r.value) >= 100 ? 0 : 1;
    return html`
      <button class="chip stat ${severity}" @click=${() => this._moreInfo(r.entities[0])}>
        <ha-icon .icon=${SENSOR_ICONS[r.deviceClass] ?? "mdi:gauge"}></ha-icon>
        <span class="label">${this._num(r.value, digits)} ${r.unit}</span>
      </button>
    `;
  }

  private _groupChip(group: Group) {
    const meta = GROUP_META[group.id];
    const active = group.active.length > 0;
    let color = meta.color;
    let icon = active ? meta.icon : meta.iconOff;
    let label = this._groupLabel(group);

    if (group.id === "climate") {
      const s = this.hass!.states[group.active[0] ?? group.entities[0]];
      const action = String(s?.attributes.hvac_action ?? (s?.state === "off" ? "off" : "idle"));
      if (action === "cooling") { color = "var(--apc-blue)"; icon = "mdi:snowflake"; }
      else if (action === "heating") { icon = "mdi:fire"; }
      else if (action === "drying") { color = "var(--apc-amber)"; icon = "mdi:water-percent"; }
      else if (action === "fan") { color = "var(--apc-light-blue)"; icon = "mdi:fan"; }
      label = this._climateLabel(s, action);
    }

    return html`
      <button
        class=${classMap({ chip: true, active, selected: this._popup === group.id })}
        style=${styleMap({ "--c": color })}
        aria-haspopup=${group.entities.length > 1 ? "dialog" : nothing}
        @click=${() => this._chipClick(group)}
      >
        <ha-icon .icon=${icon}></ha-icon>
        <span class="label">${label}</span>
      </button>
    `;
  }

  private _groupLabel(group: Group): string {
    const hass = this.hass!;
    const n = group.active.length;
    const pick = (one: string, many: string, none: string) =>
      n === 0 ? localize(hass, none) : localize(hass, n === 1 ? one : many, { n });
    switch (group.id) {
      case "motion":
        return localize(hass, n ? "motion" : "no_motion");
      case "doors":
        return pick("door_open", "doors_open", "doors_closed");
      case "windows":
        return pick("window_open", "windows_open", "windows_closed");
      case "covers":
        return pick("cover_open", "covers_open_n", "covers_closed");
      case "locks":
        return pick("lock_unlocked", "lock_unlocked", "locks_locked");
      case "lights":
        return pick("light_on", "lights_on_n", "lights_off_all");
      case "fans":
        return pick("fan_on", "fans_on_n", "fans_off_all");
      case "switches":
        return pick("switch_on", "switches_on_n", "switches_off_all");
      case "media": {
        if (!n) return localize(hass, "media_idle");
        const s = hass.states[group.active[0]];
        const title = s.attributes.media_title as string | undefined;
        return n === 1 && title ? title : localize(hass, "media_playing");
      }
      case "alerts":
        return n === 1 ? localize(hass, "alert") : localize(hass, "alerts_n", { n });
      case "batteries":
        return localize(hass, n === 1 ? "battery_low" : "batteries_low", { n });
      default:
        return "";
    }
  }

  private _climateLabel(s: HassEntity | undefined, action: string): string {
    const hass = this.hass!;
    if (!s) return "";
    const key = `climate_${action}`;
    const base = ["heating", "cooling", "drying", "fan", "idle", "off"].includes(action)
      ? localize(hass, key)
      : this._formatState(s);
    const target = s.attributes.temperature as number | undefined;
    const low = s.attributes.target_temp_low as number | undefined;
    const high = s.attributes.target_temp_high as number | undefined;
    if (s.state === "off") return base;
    if (typeof target === "number") return `${base} · ${this._num(target, 1)}°`;
    if (typeof low === "number" && typeof high === "number")
      return `${base} · ${this._num(low, 0)}–${this._num(high, 0)}°`;
    return base;
  }

  private _renderActions(actions: ResolvedAction[]) {
    return html`
      <div class=${classMap({ actions: true, dense: actions.length >= 4 })}>
        ${actions.map(
          (a) => html`
            <button
              class=${classMap({ action: true, active: a.active })}
              style=${styleMap({ "--c": a.color })}
              title=${a.name}
              aria-label=${a.name}
              ?disabled=${a.disabled}
              ${actionHandler({
                hasHold: this._hasAction(a.hold_action),
                hasDoubleTap: this._hasAction(a.double_tap_action),
                disabled: a.disabled,
              })}
              @apc-action=${(ev: CustomEvent) => this._quickAction(a, ev.detail.action)}
            >
              <ha-icon .icon=${a.icon}></ha-icon>
              <span class="label">${a.name}</span>
            </button>
          `
        )}
      </div>
    `;
  }

  // ---- Interaction --------------------------------------------------------

  private _hasAction(a?: ActionConfig): boolean {
    return !!a && a.action !== "none";
  }

  private _chipClick(group: Group) {
    if (group.entities.length === 1) {
      this._moreInfo(group.entities[0]);
      return;
    }
    this._openPopup(group.id);
  }

  private _mainLightAction(entity: string, action: ActionKind) {
    if (action === "hold") this._moreInfo(entity);
    else this._fireAction({ entity, tap_action: { action: "toggle" } }, "tap");
  }

  private _cardAction(action: ActionKind) {
    const c = this._config!;
    this._fireAction(
      { tap_action: c.tap_action, hold_action: c.hold_action, double_tap_action: c.double_tap_action },
      action
    );
  }

  private _quickAction(a: ResolvedAction, action: ActionKind) {
    this._fireAction(
      { entity: a.entity, tap_action: a.tap_action, hold_action: a.hold_action, double_tap_action: a.double_tap_action },
      action
    );
  }

  /** Hand the action to Home Assistant's own handler (confirmation, navigate, perform-action, etc.). */
  private _fireAction(
    config: { entity?: string; tap_action?: ActionConfig; hold_action?: ActionConfig; double_tap_action?: ActionConfig },
    action: ActionKind
  ) {
    const actionConfig = config[`${action}_action` as const];
    if (!this._hasAction(actionConfig)) return;
    this.dispatchEvent(
      new CustomEvent("hass-action", { bubbles: true, composed: true, detail: { config, action } })
    );
  }

  private _moreInfo(entityId?: string, ev?: Event) {
    ev?.stopPropagation();
    if (!entityId) return;
    if (this._popup) this._onPopupMoreInfo();
    this.dispatchEvent(
      new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } })
    );
  }

  // ---- Popup --------------------------------------------------------------

  private _currentGroups(): Partial<Record<GroupId, Group>> {
    if (!this.hass || !this._config) return {};
    const index = this._index ?? indexArea(this.hass, this._config.area, this._config.exclude_entities ?? []);
    return buildGroups(this.hass, this._config, index);
  }

  private _sortedEntities(group: Group): string[] {
    return [...group.entities].sort(
      (a, b) =>
        Number(group.active.includes(b)) - Number(group.active.includes(a)) ||
        this._entityName(this.hass!.states[a]).localeCompare(this._entityName(this.hass!.states[b]))
    );
  }

  private async _openPopup(id: GroupId) {
    const group = this._currentGroups()[id];
    if (!group) return;
    this._popup = id;
    this._tiles = undefined;
    let helpers: { createCardElement: (c: Record<string, unknown>) => HTMLElement | Promise<HTMLElement> } | undefined;
    try {
      helpers = await (window as unknown as { loadCardHelpers?: () => Promise<typeof helpers> }).loadCardHelpers?.();
    } catch {
      helpers = undefined;
    }
    if (this._popup !== id) return;
    if (!helpers) {
      this._tiles = null;
      return;
    }
    const tiles = await Promise.all(
      this._sortedEntities(group).map(async (entity) => {
        const el = await helpers!.createCardElement(this._tileConfig(entity));
        (el as unknown as { hass?: HomeAssistant }).hass = this.hass;
        return el;
      })
    );
    if (this._popup === id) this._tiles = tiles;
  }

  /** Native tile card config, with the control feature that makes sense for the domain. */
  private _tileConfig(entity: string): Record<string, unknown> {
    const s = this.hass!.states[entity];
    const domain = entity.split(".")[0];
    const features: Record<string, unknown>[] = [];
    if (domain === "light") {
      const modes = (s?.attributes.supported_color_modes as string[] | undefined) ?? [];
      if (modes.some((m) => m !== "onoff")) features.push({ type: "light-brightness" });
    } else if (domain === "cover") {
      features.push({ type: "cover-open-close" });
    } else if (domain === "climate") {
      features.push({ type: "target-temperature" });
    }
    return {
      type: "tile",
      entity,
      name: this._entityName(s),
      ...(features.length ? { features, features_position: "bottom" } : {}),
    };
  }

  private _closePopup() {
    this.renderRoot.querySelector<HTMLDialogElement>("dialog.apc-popup")?.close();
  }

  private _onPopupClosed() {
    this._popup = undefined;
    this._tiles = undefined;
  }

  private _onPopupClick(ev: MouseEvent) {
    // Clicks on the backdrop land on the <dialog> element itself.
    if (ev.target === ev.currentTarget) this._closePopup();
  }

  /** A tile asked for more-info: step aside so HA's dialog is on top, come back when it closes. */
  private _onPopupMoreInfo() {
    this._reopen = this._popup;
    this._closePopup();
  }

  protected updated(): void {
    const dialog = this.renderRoot.querySelector<HTMLDialogElement>("dialog.apc-popup");
    if (dialog && !dialog.open) {
      try {
        dialog.showModal();
      } catch {
        dialog.setAttribute("open", "");
      }
    }
  }

  private _bulkActions(group: Group): { label: string; icon: string; service: string }[] {
    const any = group.active.length > 0;
    const t = (k: string) => localize(this.hass, k);
    switch (group.id) {
      case "lights":
        return [any
          ? { label: t("turn_all_off"), icon: "mdi:lightbulb-group-off-outline", service: "light.turn_off" }
          : { label: t("turn_all_on"), icon: "mdi:lightbulb-group", service: "light.turn_on" }];
      case "switches":
        return [any
          ? { label: t("turn_all_off"), icon: "mdi:power-plug-off-outline", service: "switch.turn_off" }
          : { label: t("turn_all_on"), icon: "mdi:power-plug-outline", service: "switch.turn_on" }];
      case "fans":
        return [any
          ? { label: t("turn_all_off"), icon: "mdi:fan-off", service: "fan.turn_off" }
          : { label: t("turn_all_on"), icon: "mdi:fan", service: "fan.turn_on" }];
      case "covers":
        return [
          { label: t("open_all"), icon: "mdi:arrow-up", service: "cover.open_cover" },
          { label: t("close_all"), icon: "mdi:arrow-down", service: "cover.close_cover" },
        ];
      case "media":
        return any ? [{ label: t("pause_all"), icon: "mdi:pause", service: "media_player.media_pause" }] : [];
      default:
        return [];
    }
  }

  private _bulk(group: Group, service: string) {
    this._fireAction(
      {
        tap_action: { action: "perform-action", perform_action: service, target: { entity_id: [...group.entities] } },
      },
      "tap"
    );
  }

  private _renderPopup(group: Group, area: AreaRegistryEntry) {
    const hass = this.hass!;
    const meta = GROUP_META[group.id];
    const active = group.active.length > 0;
    const title = group.id === "alerts" ? localize(hass, "g_alerts") : localize(hass, `g_${group.id}`);
    const sub = `${this._config!.name || area.name} · ${localize(hass, "n_of_m_active", {
      n: group.active.length,
      m: group.entities.length,
    })}`;
    return html`
      <dialog
        class="apc-popup"
        aria-label=${title}
        style=${styleMap({ "--c": meta.color })}
        @close=${this._onPopupClosed}
        @click=${this._onPopupClick}
        @hass-more-info=${this._onPopupMoreInfo}
      >
        <div class="popup-surface">
          <header class="popup-head">
            <div class=${classMap({ "popup-icon": true, active })}>
              <ha-icon .icon=${active ? meta.icon : meta.iconOff}></ha-icon>
            </div>
            <div class="popup-titles">
              <div class="popup-title">${title}</div>
              <div class="popup-sub">${sub}</div>
            </div>
            <button class="popup-close" aria-label=${localize(hass, "close")} @click=${() => this._closePopup()}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          ${this._bulkActions(group).length
            ? html`<div class="popup-bulk">
                ${this._bulkActions(group).map(
                  (b) => html`<button class="bulk" @click=${() => this._bulk(group, b.service)}>
                    <ha-icon .icon=${b.icon}></ha-icon>${b.label}
                  </button>`
                )}
              </div>`
            : nothing}
          <div class="popup-grid">
            ${this._tiles === undefined
              ? nothing
              : this._tiles === null
              ? this._sortedEntities(group).map((id) => this._fallbackTile(id, group))
              : this._tiles}
          </div>
        </div>
      </dialog>
    `;
  }

  /** Tile look-alike used when HA's card helpers can't be loaded. */
  private _fallbackTile(id: string, group: Group) {
    const hass = this.hass!;
    const s = hass.states[id];
    if (!s) return nothing;
    const active = group.active.includes(id);
    const rgb = id.startsWith("light.") ? lightColor(s) : undefined;
    const color = rgb ? `rgb(${rgb.join(",")})` : GROUP_META[group.id].color;
    const t = Date.parse(s.last_changed);
    const toggleable = ["light", "switch", "fan", "input_boolean", "cover", "media_player", "lock"].includes(
      id.split(".")[0]
    );
    return html`
      <div
        class=${classMap({ "mini-tile": true, active })}
        style=${styleMap({ "--c": color })}
        role="button"
        tabindex="0"
        ${actionHandler({ hasHold: true })}
        @apc-action=${(ev: CustomEvent) => {
          if (ev.detail.action === "hold" || !toggleable) this._moreInfo(id);
          else this._fireAction({ entity: id, tap_action: { action: "toggle" } }, "tap");
        }}
      >
        <div class="mt-icon"><ha-state-icon .hass=${hass} .stateObj=${s}></ha-state-icon></div>
        <div class="mt-text">
          <div class="mt-name">${this._entityName(s)}</div>
          <div class="mt-state">${this._formatState(s)}${Number.isNaN(t) ? "" : ` · ${this._ago(t)}`}</div>
        </div>
      </div>
    `;
  }

  // ---- Formatting ---------------------------------------------------------

  private _lang() {
    return this.hass?.locale?.language || this.hass?.language || "en";
  }

  private _num(v: number, digits: number) {
    return new Intl.NumberFormat(this._lang(), { maximumFractionDigits: digits }).format(v);
  }

  private _lastChange(ids: string[]): number | undefined {
    let latest: number | undefined;
    for (const id of ids) {
      const t = Date.parse(this.hass!.states[id]?.last_changed ?? "");
      if (!Number.isNaN(t) && (latest === undefined || t > latest)) latest = t;
    }
    return latest;
  }

  private _ago(ts: number): string {
    const sec = Math.max(0, (Date.now() - ts) / 1000);
    const lang = this._lang();
    const fmt = (value: number, unit: string) =>
      new Intl.NumberFormat(lang, { style: "unit", unit, unitDisplay: "short" }).format(value);
    if (sec < 60) return localize(this.hass, "since_now");
    if (sec < 3600) return fmt(Math.floor(sec / 60), "minute");
    if (sec < 86400) return fmt(Math.floor(sec / 3600), "hour");
    return fmt(Math.floor(sec / 86400), "day");
  }

  private _formatState(s: HassEntity): string {
    try {
      return this.hass?.formatEntityState?.(s) ?? s.state;
    } catch {
      return s.state;
    }
  }

  private _entityName(s?: HassEntity): string {
    if (!s) return "";
    const full = (s.attributes.friendly_name as string | undefined) ?? s.entity_id;
    const areaName = this.hass?.areas?.[this._config!.area]?.name;
    if (areaName && full.toLowerCase().startsWith(areaName.toLowerCase() + " ")) {
      const rest = full.slice(areaName.length + 1).trim();
      return rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : full;
    }
    return full;
  }
}

if (!customElements.get("area-pulse-card")) {
  customElements.define("area-pulse-card", AreaPulseCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "area-pulse-card",
    name: "Area Pulse Card",
    description: "Presence, climate, openings, alerts and quick actions for an area.",
    preview: true,
  });
  // eslint-disable-next-line no-console
  console.info(
    `%c AREA-PULSE-CARD %c v${VERSION} `,
    "color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px",
    "color:#03a9f4;background:#fff0;font-weight:700;padding:2px 4px"
  );
}
