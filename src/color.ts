import { converter, formatRgb, type Oklch } from 'culori';
import { clamp, normalizeHue } from './utils';

const toOklch = converter('oklch');

/** Fallback base hue (indigo) used when neither `shades` nor `hue` is provided. */
const DEFAULT_HUE = 265;
const BASE_LIGHTNESS = 0.64;
const BASE_CHROMA = 0.19;

export interface BasePalette {
  blob0: Oklch;
  blob1: Oklch;
  blob2: Oklch;
}

export interface PaletteOptions {
  shades?: [string, string, string];
  hue?: number;
  secondaryHue?: number;
}

function shadeFromHue(hue: number): Oklch {
  return {
    mode: 'oklch',
    l: BASE_LIGHTNESS,
    c: BASE_CHROMA,
    h: normalizeHue(hue),
  };
}

function parseShade(shade: string): Oklch {
  const parsed = toOklch(shade);
  if (!parsed) {
    throw new Error(`GlowOrb: could not parse shade color "${shade}"`);
  }
  return parsed;
}

/**
 * Resolves the three blob base colors, either from an explicit `shades` list
 * or generated from a base `hue` (and optional `secondaryHue` for spread).
 */
export function resolveBasePalette(options: PaletteOptions): BasePalette {
  if (options.shades) {
    const [blob0, blob1, blob2] = options.shades.map(parseShade);
    return { blob0, blob1, blob2 };
  }

  const hue = options.hue ?? DEFAULT_HUE;
  const secondaryHue = options.secondaryHue ?? hue + 35;

  return {
    blob0: shadeFromHue(hue),
    blob1: shadeFromHue(secondaryHue),
    blob2: shadeFromHue(hue - 20),
  };
}

export interface DriftInput {
  base: Oklch;
  time: number;
  hueShift: number;
  intensity: number;
  /** Per-blob offset so the three blobs don't drift in perfect unison. */
  offset: number;
}

/**
 * Applies a slow oklch hue/lightness/chroma drift on top of a base color,
 * layered on either explicit `shades` or hue-generated palettes alike.
 */
export function driftColor(input: DriftInput): Oklch {
  const hueShift = clamp(input.hueShift, 0, 1);
  const intensity = clamp(input.intensity, 0, 1);
  const baseHue = input.base.h ?? 0;

  const hue = normalizeHue(
    baseHue + Math.sin(input.time * 0.13 + input.offset) * 40 * hueShift
  );
  const l = clamp(
    input.base.l + Math.sin(input.time * 0.21 + input.offset) * 0.1 * intensity,
    0,
    1
  );
  const c = Math.max(
    0,
    input.base.c +
      Math.sin(input.time * 0.17 + input.offset * 1.3) * 0.05 * intensity
  );

  return { mode: 'oklch', l, c, h: hue };
}

export function formatOklch(color: Oklch): string {
  const l = clamp(color.l, 0, 1);
  const c = Math.max(0, color.c);
  const h = color.h ?? 0;
  return `oklch(${(l * 100).toFixed(1)}% ${c.toFixed(3)} ${h.toFixed(1)})`;
}

/** Derives a default glow color (used in the box-shadow) from a blob's base color. */
export function deriveGlow(color: Oklch, alpha = 0.6): string {
  return formatRgb({ ...color, alpha });
}
