import test from "node:test";
import assert from "node:assert/strict";

import { CHIP_PRIORITY, DEFAULT_MAX_CHIPS, chipTone, pickChips } from "../src/discovery.ts";

const g = (group, active = true) => ({ group, active });
const ids = (list) => list.map((c) => c.group ?? `stat:${c.severity || "ok"}`);

test("the default cap is three chips", () => {
  assert.equal(DEFAULT_MAX_CHIPS, 3);
});

test("max 0 shows every chip in the configured order", () => {
  const items = [g("motion"), g("lights"), g("doors", false)];
  const { shown, hidden } = pickChips(items, 0);
  assert.deepEqual(ids(shown), ["motion", "lights", "doors"]);
  assert.equal(hidden.length, 0);
});

test("problems, then openings, then lights, then climate and media", () => {
  const items = ["motion", "media", "switches", "climate", "lights", "windows", "locks", "batteries"].map((x) => g(x));
  const { shown, hidden } = pickChips(items, 3);
  assert.deepEqual(ids(shown), ["batteries", "locks", "windows"]);
  assert.deepEqual(ids(hidden), ["lights", "climate", "media", "switches", "motion"]);
});

test("active chips come before inactive ones, whatever their priority", () => {
  const items = [g("doors", false), g("windows", false), g("switches"), g("lights", false), g("media")];
  const { shown, hidden } = pickChips(items, 3);
  assert.deepEqual(ids(shown), ["media", "switches", "doors"]);
  assert.deepEqual(ids(hidden), ["windows", "lights"]);
});

test("an out-of-range reading ranks with the openings, a normal one after every active group", () => {
  const items = [g("lights"), { active: true, severity: "" }, { active: true, severity: "bad" }, g("doors"), g("motion")];
  const { shown, hidden } = pickChips(items, 3);
  assert.deepEqual(ids(shown), ["doors", "stat:bad", "lights"]);
  assert.deepEqual(ids(hidden), ["motion", "stat:ok"]);
});

test("ties keep the configured order, and nothing is hidden when everything fits", () => {
  const items = [g("lights"), g("doors")];
  const { shown, hidden } = pickChips(items, 3);
  assert.deepEqual(ids(shown), ["doors", "lights"]);
  assert.equal(hidden.length, 0);
});

test("every group has a place in the priority list", () => {
  for (const id of ["motion", "doors", "windows", "covers", "locks", "lights", "fans", "switches", "media", "climate", "alerts", "batteries"])
    assert.ok(CHIP_PRIORITY.includes(id), id);
});

test("colour only for problems, openings and lights", () => {
  assert.equal(chipTone("alerts"), "bad");
  assert.equal(chipTone("batteries"), "bad");
  assert.equal(chipTone("locks"), "bad");
  assert.equal(chipTone("doors"), "warn");
  assert.equal(chipTone("windows"), "warn");
  assert.equal(chipTone("lights"), "on");
  for (const id of ["motion", "covers", "fans", "switches", "media", "climate"]) assert.equal(chipTone(id), "", id);
});
