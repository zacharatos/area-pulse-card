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
  indexArea,
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
import "./editor";

const VERSION = "1.0.0";

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
  static styles = cardStyles;

  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ reflect: true }) layout: "default" | "compact" = "default";
  @state() private _config?: AreaPulseCardConfig;
  @state() private _expanded?: GroupId;

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
    this._expanded = undefined;
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
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._ticker) window.clearInterval(this._ticker);
  }

  protected shouldUpdate(changed: PropertyValues): boolean {
    if (!this._config) return false;
    if (!changed.has("hass") || changed.size > 1) return true;
    const old = changed.get("hass") as HomeAssistant | undefined;
    const hass = this.hass;
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
    const lightsOn = !!groups.lights?.active.length;
    const accent = config.color ? cssColor(config.color) : undefined;
    const showPicture = config.show_picture !== false && !!area.picture;
    const headerHasAction = this._hasAction(config.tap_action) || this._hasAction(config.hold_action);

    return html`
      <ha-card
        class=${classMap({ alerting: alerts.length > 0 })}
        style=${styleMap(accent ? { "--apc-accent": accent } : {})}
      >
        ${showPicture ? html`<div class="picture" style=${styleMap({ backgroundImage: `url("${area.picture}")` })}></div>` : nothing}
        <div class=${classMap({ glow: true, on: lightsOn })}></div>
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
            <div class=${classMap({ "area-icon": true, occupied })}>
              <ha-icon .icon=${config.icon || area.icon || DEFAULT_ICON}></ha-icon>
              ${occupied ? html`<span class="presence-dot"></span>` : nothing}
            </div>
            <div class="titles">
              <div class="name">${config.name || area.name}</div>
              <div class="secondary">${this._secondary(groups)}</div>
            </div>
            ${this._renderClimate(temperature, humidity)}
          </div>
          ${alerts.length ? this._renderAlertBanner(alerts) : nothing}
          ${this._renderChips(groups, extras)}
          ${this._expanded && groups[this._expanded] ? this._renderDrawer(groups[this._expanded]!) : nothing}
          ${actions.length ? this._renderActions(actions) : nothing}
        </div>
      </ha-card>
    `;
  }

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
              <ha-icon icon="mdi:water-percent"></ha-icon>${this._num(hum.value, 0)}${hum.unit}
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
        @click=${() => (alerts.length === 1 ? this._moreInfo(alerts[0]) : this._toggleExpanded("alerts"))}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="text">${text}</span>
      </div>
    `;
  }

  private _renderChips(groups: Partial<Record<GroupId, Group>>, extras: Reading[]) {
    const config = this._config!;
    const order = (config.groups ?? DEFAULT_GROUPS).filter((g) => g !== "presence");
    const showInactive = config.show_inactive === true;
    const chips: TemplateResult[] = [];

    for (const r of extras) chips.push(this._statChip(r));

    for (const id of order) {
      const group = groups[id];
      if (!group) continue;
      // Alerts already have a banner; batteries only matter when low.
      if (id === "alerts" && (this.layout !== "compact" || !group.active.length)) continue;
      if (id === "batteries" && !group.active.length) continue;
      const active = group.active.length > 0;
      if (!active && !showInactive) continue;
      chips.push(this._groupChip(group));
    }
    if (!chips.length) return nothing;
    return html`<div class="chips">${chips}</div>`;
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
        class=${classMap({ chip: true, active, selected: this._expanded === group.id })}
        style=${styleMap({ "--c": color })}
        aria-expanded=${group.entities.length > 1 ? String(this._expanded === group.id) : nothing}
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

  private _renderDrawer(group: Group) {
    const hass = this.hass!;
    const meta = GROUP_META[group.id];
    const sorted = [...group.entities].sort(
      (a, b) => Number(group.active.includes(b)) - Number(group.active.includes(a))
    );
    return html`
      <div class="drawer" style=${styleMap({ "--c": meta.color })}>
        ${sorted.map((id) => {
          const s = hass.states[id];
          if (!s) return nothing;
          const t = Date.parse(s.last_changed);
          return html`
            <div
              class=${classMap({ row: true, active: group.active.includes(id) })}
              role="button"
              tabindex="0"
              @click=${() => this._moreInfo(id)}
              @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this._moreInfo(id)}
            >
              <ha-state-icon .hass=${hass} .stateObj=${s}></ha-state-icon>
              <span class="row-name">${this._entityName(s)}</span>
              <span class="row-state">
                ${this._formatState(s)}
                ${Number.isNaN(t) ? nothing : html`<span class="ago">${this._ago(t)}</span>`}
              </span>
            </div>
          `;
        })}
      </div>
    `;
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
    this._toggleExpanded(group.id);
  }

  private _toggleExpanded(id: GroupId) {
    this._expanded = this._expanded === id ? undefined : id;
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
    this.dispatchEvent(
      new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId } })
    );
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
