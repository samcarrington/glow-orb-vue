# Glow Orb — Vue port with per-orb behavior & color individuality

Date: 2026-08-05
Status: Approved

## Problem

The current `glow-orb.js` is a dependency-free Custom Element. All orbs run identical
sine/cosine motion math and are limited to a fixed 3-colour `shades` list, so every
orb on a page looks and moves the same way — unlike the Deepgram original, where each
orb contorts subtly differently and drifts hue/intensity over time.

## Goals

- Per-orb behavior tuning via `excitement`, `warp`, and `phase` props.
- Per-orb color individuality via `hue`/`secondaryHue`/`intensity`/`hueShift`, while
  still supporting the existing explicit `shades` list.
- Ship as a real Vue 3 component, importable as an npm dependency (not just a file to
  copy in).
- Retire the vanilla Custom Element version; Vue becomes the only implementation.

## Package layout

Repo root becomes the package (no existing package.json):

```
package.json, vite.config.ts, tsconfig.json
src/
  GlowOrb.vue         — the component
  useHoverPreview.ts  — hover-envelope composable (ported from attachHoverPreview)
  animation.ts        — motion math (pure functions, unit-testable)
  color.ts            — shade/hue resolution + oklch hue-drift math
  index.ts            — public exports (GlowOrb, useHoverPreview, types)
demo/                 — Vue demo app replacing demo.html
```

Built with Vite lib mode → ESM + CJS + `.d.ts`. Package name: `glow-orb-vue`.

## Motion model — three independent knobs

- **`excitement`** (default `1`, range ~`0–2`): scales speed (phase advance rate) and
  positional amplitude (x/y sine ranges, scale swing).
- **`warp`** (default `1`, range ~`0–2`): scales shape contortion depth only —
  border-radius r1–r4 swing range and rotation range — independent of speed.
- **`phase`** (default `0.09`, seconds): per-blob time offset (replaces the current
  hardcoded `0.09`). `0` = blobs move in lockstep; larger = more desynced.
- **`env`** (unchanged, `0–1` runtime prop): live overlay on top of the baseline,
  additive — drives the hover-preview envelope as before.

## Color model — shades OR hue-driven, plus drift

- **`shades`**: explicit `[c1, c2, c3]` array — works as today, takes precedence.
- **`hue` / `secondaryHue`**: if `shades` is not given, derive the 3 blob colors from
  a base hue (and optional secondary hue for spread) in oklch with fixed
  chroma/lightness.
- **`intensity`** (default `0.5`, `0–1`): scales saturation/lightness swing over time.
- **`hueShift`** (default `0`, `0–1`): animates a slow oklch hue rotation over time,
  layered on top of either `shades` or `hue` mode.

## Component API

```ts
interface GlowOrbProps {
  size?: number;
  shades?: [string, string, string];
  hue?: number;
  secondaryHue?: number;
  intensity?: number;
  hueShift?: number;
  glow?: string;
  excitement?: number;
  warp?: number;
  phase?: number;
  env?: number;
}
```

`useHoverPreview(targetRef, orbRef, { seed })` composable reproduces the current
`attachHoverPreview`, writing into a reactive `env` ref bound to the orb's prop.

## Demo & testing

Vite dev server demo app shows 3 orb cards with varied `excitement`/`warp`/`hue` per
orb. Vitest unit tests for the pure `animation.ts`/`color.ts` math. Manual visual
check in browser (dev server) per standing frontend testing rules.

## Out of scope

- Publishing to a public npm registry (local/workspace consumption only for now).
- Framework-agnostic (React/Svelte) ports.
- Audio-reactive input beyond the existing `env` prop contract.
