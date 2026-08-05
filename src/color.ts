import { clamp, normalizeHue } from './utils';

/**
 * Minimal OKLCH color representation, matching the shape of culori's `Oklch`
 * type for the subset of fields this component uses. Kept local so the
 * library has no runtime color-space dependency.
 */
export interface Oklch {
  mode: 'oklch';
  l: number;
  c: number;
  h?: number;
  alpha?: number;
}

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

// ---------------------------------------------------------------------------
// sRGB <-> OKLCH conversion
//
// Implements Björn Ottosson's public-domain OKLab conversion formulas
// (https://bottosson.github.io/posts/oklab/), used instead of pulling in the
// `culori` package (which bundles ~30 color spaces we never use, unshakeable
// due to module-level side-effect registration).
// ---------------------------------------------------------------------------

function srgbToLinear(channel: number): number {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(channel: number): number {
  const c = clamp(channel, 0, 1);
  const encoded = c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
  return Math.round(clamp(encoded, 0, 1) * 255);
}

function linearSrgbToOklab(
  r: number,
  g: number,
  b: number
): {
  L: number;
  a: number;
  b: number;
} {
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  return {
    L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  };
}

function oklabToLinearSrgb(
  L: number,
  a: number,
  b: number
): { r: number; g: number; b: number } {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  return {
    r: 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    g: -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    b: -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  };
}

function rgbToOklch(r: number, g: number, b: number, alpha: number): Oklch {
  const {
    L,
    a,
    b: labB,
  } = linearSrgbToOklab(srgbToLinear(r), srgbToLinear(g), srgbToLinear(b));
  const c = Math.sqrt(a * a + labB * labB);
  const h = c < 1e-6 ? 0 : normalizeHue((Math.atan2(labB, a) * 180) / Math.PI);
  return { mode: 'oklch', l: L, c, h, alpha };
}

function oklchToRgb(color: Oklch): {
  r: number;
  g: number;
  b: number;
  alpha: number;
} {
  const hRad = ((color.h ?? 0) * Math.PI) / 180;
  const a = color.c * Math.cos(hRad);
  const b = color.c * Math.sin(hRad);
  const linear = oklabToLinearSrgb(color.l, a, b);

  return {
    r: linearToSrgb(linear.r),
    g: linearToSrgb(linear.g),
    b: linearToSrgb(linear.b),
    alpha: color.alpha ?? 1,
  };
}

// ---------------------------------------------------------------------------
// CSS color string parsing (hex, rgb()/rgba(), hsl()/hsla())
// ---------------------------------------------------------------------------

function parseHex(input: string): Oklch | null {
  const hex = input.slice(1);
  if (!/^[0-9a-f]+$/i.test(hex)) return null;

  let r: number;
  let g: number;
  let b: number;
  let alpha = 1;

  if (hex.length === 3 || hex.length === 4) {
    r = Number.parseInt(hex[0] + hex[0], 16);
    g = Number.parseInt(hex[1] + hex[1], 16);
    b = Number.parseInt(hex[2] + hex[2], 16);
    if (hex.length === 4) {
      alpha = Number.parseInt(hex[3] + hex[3], 16) / 255;
    }
  } else if (hex.length === 6 || hex.length === 8) {
    r = Number.parseInt(hex.slice(0, 2), 16);
    g = Number.parseInt(hex.slice(2, 4), 16);
    b = Number.parseInt(hex.slice(4, 6), 16);
    if (hex.length === 8) {
      alpha = Number.parseInt(hex.slice(6, 8), 16) / 255;
    }
  } else {
    return null;
  }

  return rgbToOklch(r, g, b, alpha);
}

/** Parses a single rgb()/hsl() channel value, resolving percentages. */
function parseChannel(token: string, percentBasis: number): number {
  const trimmed = token.trim();
  if (trimmed.endsWith('%')) {
    return (Number.parseFloat(trimmed) / 100) * percentBasis;
  }
  return Number.parseFloat(trimmed);
}

function parseAlphaToken(token: string | undefined): number {
  if (token === undefined) return 1;
  const trimmed = token.trim();
  if (trimmed.endsWith('%')) {
    return Number.parseFloat(trimmed) / 100;
  }
  return Number.parseFloat(trimmed);
}

/** Splits a CSS function's argument list, supporting both `,` and ` ` (with optional `/ alpha`) syntax. */
function splitFunctionArgs(args: string): {
  channels: string[];
  alpha?: string;
} {
  const [main, alpha] = args.split('/').map((part) => part.trim());
  const channels = main.split(/[\s,]+/).filter(Boolean);
  return { channels, alpha };
}

function parseRgbFunction(input: string): Oklch | null {
  const match = /^rgba?\(([^)]+)\)$/i.exec(input.trim());
  if (!match) return null;

  const { channels, alpha } = splitFunctionArgs(match[1]);
  if (channels.length < 3) return null;

  const r = parseChannel(channels[0], 255);
  const g = parseChannel(channels[1], 255);
  const b = parseChannel(channels[2], 255);
  const a = parseAlphaToken(alpha ?? channels[3]);

  if ([r, g, b, a].some(Number.isNaN)) return null;

  return rgbToOklch(r, g, b, a);
}

function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  const hue = normalizeHue(h) / 360;
  const sat = clamp(s, 0, 1);
  const light = clamp(l, 0, 1);

  if (sat === 0) {
    const v = Math.round(light * 255);
    return { r: v, g: v, b: v };
  }

  const q = light < 0.5 ? light * (1 + sat) : light + sat - light * sat;
  const p = 2 * light - q;

  function hueToRgb(t: number): number {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  }

  return {
    r: Math.round(hueToRgb(hue + 1 / 3) * 255),
    g: Math.round(hueToRgb(hue) * 255),
    b: Math.round(hueToRgb(hue - 1 / 3) * 255),
  };
}

function parseHslFunction(input: string): Oklch | null {
  const match = /^hsla?\(([^)]+)\)$/i.exec(input.trim());
  if (!match) return null;

  const { channels, alpha } = splitFunctionArgs(match[1]);
  if (channels.length < 3) return null;

  const h = Number.parseFloat(channels[0]);
  const s = parseChannel(channels[1], 1);
  const l = parseChannel(channels[2], 1);
  const a = parseAlphaToken(alpha ?? channels[3]);

  if ([h, s, l, a].some(Number.isNaN)) return null;

  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToOklch(r, g, b, a);
}

function parseCssColor(input: string): Oklch | null {
  const trimmed = input.trim();
  if (trimmed.startsWith('#')) return parseHex(trimmed);
  if (/^rgba?\(/i.test(trimmed)) return parseRgbFunction(trimmed);
  if (/^hsla?\(/i.test(trimmed)) return parseHslFunction(trimmed);
  return null;
}

function parseShade(shade: string): Oklch {
  const parsed = parseCssColor(shade);
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
  const { r, g, b } = oklchToRgb({ ...color, alpha });
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
