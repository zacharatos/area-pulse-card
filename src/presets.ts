import type { ActionConfig, AreaRegistryEntry, HomeAssistant, PresetId, QuickActionConfig } from "./types";
import type { Group, AreaIndex } from "./discovery";
import { localize } from "./localize";

export const PRESETS: PresetId[] = [
  "lights_toggle",
  "lights_on",
  "lights_off",
  "covers_open",
  "covers_close",
  "fans_off",
  "media_stop",
  "vacuum_area",
  "everything_off",
];

export interface ResolvedAction {
  name: string;
  icon: string;
  active: boolean;
  color: string;
  disabled: boolean;
  tap_action: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  entity?: string;
}

const TOGGLE_ON_STATES = new Set(["on", "open", "opening", "playing", "unlocked", "cleaning", "heat", "cool", "auto", "heat_cool", "dry", "fan_only"]);

function areaAction(service: string, areaId: string, extra: Partial<ActionConfig> = {}): ActionConfig {
  return { action: "perform-action", perform_action: service, target: { area_id: areaId }, ...extra };
}

/** Default action for a plain entity button. */
function entityDefaultAction(entity: string): ActionConfig {
  const domain = entity.split(".")[0];
  if (domain === "scene" || domain === "script") {
    return { action: "perform-action", perform_action: `${domain}.turn_on`, target: { entity_id: entity } };
  }
  if (domain === "button" || domain === "input_button") {
    return { action: "perform-action", perform_action: `${domain}.press`, target: { entity_id: entity } };
  }
  if (domain === "vacuum") {
    return { action: "more-info", entity };
  }
  return { action: "toggle", entity };
}

const DEFAULT_ICONS: Record<string, string> = {
  light: "mdi:lightbulb",
  switch: "mdi:toggle-switch-variant",
  fan: "mdi:fan",
  cover: "mdi:window-shutter",
  scene: "mdi:palette",
  script: "mdi:script-text-play",
  media_player: "mdi:speaker",
  vacuum: "mdi:robot-vacuum",
  climate: "mdi:thermostat",
  lock: "mdi:lock",
  button: "mdi:gesture-tap-button",
};

export function resolveAction(
  hass: HomeAssistant,
  cfg: QuickActionConfig,
  area: AreaRegistryEntry,
  groups: Partial<Record<string, Group>>,
  _index: AreaIndex
): ResolvedAction {
  const areaName = area.name;
  const lightsOn = (groups.lights?.active.length ?? 0) > 0;
  const stateObj = cfg.entity ? hass.states[cfg.entity] : undefined;
  let base: Omit<ResolvedAction, "hold_action" | "double_tap_action">;

  switch (cfg.preset) {
    case "lights_toggle":
      base = {
        name: localize(hass, "preset_lights_toggle"),
        icon: lightsOn ? "mdi:lightbulb-group" : "mdi:lightbulb-group-off-outline",
        active: lightsOn,
        color: "var(--apc-amber)",
        disabled: !groups.lights,
        tap_action: areaAction(lightsOn ? "light.turn_off" : "light.turn_on", area.area_id),
      };
      break;
    case "lights_on":
      base = {
        name: localize(hass, "preset_lights_on"),
        icon: "mdi:lightbulb-on-outline",
        active: false,
        color: "var(--apc-amber)",
        disabled: !groups.lights,
        tap_action: areaAction("light.turn_on", area.area_id),
      };
      break;
    case "lights_off":
      base = {
        name: localize(hass, "preset_lights_off"),
        icon: "mdi:lightbulb-off-outline",
        active: false,
        color: "var(--apc-amber)",
        disabled: !groups.lights,
        tap_action: areaAction("light.turn_off", area.area_id),
      };
      break;
    case "covers_open":
      base = {
        name: localize(hass, "preset_covers_open"),
        icon: "mdi:window-shutter-open",
        active: false,
        color: "var(--apc-purple)",
        disabled: !groups.covers,
        tap_action: areaAction("cover.open_cover", area.area_id),
      };
      break;
    case "covers_close":
      base = {
        name: localize(hass, "preset_covers_close"),
        icon: "mdi:window-shutter",
        active: false,
        color: "var(--apc-purple)",
        disabled: !groups.covers,
        tap_action: areaAction("cover.close_cover", area.area_id),
      };
      break;
    case "fans_off":
      base = {
        name: localize(hass, "preset_fans_off"),
        icon: "mdi:fan-off",
        active: false,
        color: "var(--apc-cyan)",
        disabled: !groups.fans,
        tap_action: areaAction("fan.turn_off", area.area_id),
      };
      break;
    case "media_stop":
      base = {
        name: localize(hass, "preset_media_stop"),
        icon: "mdi:stop-circle-outline",
        active: (groups.media?.active.length ?? 0) > 0,
        color: "var(--apc-indigo)",
        disabled: !groups.media,
        tap_action: areaAction("media_player.media_stop", area.area_id),
      };
      break;
    case "vacuum_area": {
      const cleaning = stateObj?.state === "cleaning";
      base = {
        name: localize(hass, "preset_vacuum_area"),
        icon: cleaning ? "mdi:robot-vacuum-variant" : "mdi:robot-vacuum",
        active: cleaning,
        color: "var(--apc-teal)",
        disabled: !cfg.entity,
        tap_action: {
          action: "perform-action",
          perform_action: "vacuum.clean_area",
          target: { entity_id: cfg.entity },
          data: { cleaning_area_id: [area.area_id] },
          confirmation: { text: localize(hass, "confirm_vacuum", { area: areaName }) },
        },
      };
      break;
    }
    case "everything_off":
      base = {
        name: localize(hass, "preset_everything_off"),
        icon: "mdi:power",
        active: false,
        color: "var(--apc-red)",
        disabled: false,
        tap_action: areaAction("homeassistant.turn_off", area.area_id, {
          confirmation: { text: localize(hass, "confirm_everything_off", { area: areaName }) },
        }),
      };
      break;
    default: {
      const domain = cfg.entity?.split(".")[0] ?? "";
      base = {
        name:
          (stateObj?.attributes.friendly_name as string | undefined)?.replace(new RegExp(`^${escapeRe(areaName)}\\s*`, "i"), "") ||
          cfg.entity ||
          "Action",
        icon: (stateObj?.attributes.icon as string | undefined) || DEFAULT_ICONS[domain] || "mdi:gesture-tap",
        active: !!stateObj && TOGGLE_ON_STATES.has(stateObj.state),
        color: "var(--apc-accent)",
        disabled: !!cfg.entity && (!stateObj || stateObj.state === "unavailable"),
        tap_action: cfg.entity ? entityDefaultAction(cfg.entity) : { action: "none" },
      };
    }
  }

  return {
    ...base,
    name: cfg.name ?? base.name,
    icon: cfg.icon ?? base.icon,
    color: cfg.color ? cssColor(cfg.color) : base.color,
    tap_action: cfg.tap_action ?? base.tap_action,
    hold_action: cfg.hold_action ?? (cfg.entity ? { action: "more-info", entity: cfg.entity } : undefined),
    double_tap_action: cfg.double_tap_action,
    entity: cfg.entity,
  };
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Accept HA colour tokens ("amber", "light-blue") or any CSS colour. */
export function cssColor(color: string): string {
  if (/^(#|rgb|hsl|var\()/i.test(color)) return color;
  if (color === "primary" || color === "accent") return `var(--${color}-color)`;
  return `var(--${color}-color, ${color})`;
}
