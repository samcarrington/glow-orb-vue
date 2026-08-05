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
/**
 * Resolves the three blob base colors, either from an explicit `shades` list
 * or generated from a base `hue` (and optional `secondaryHue` for spread).
 */
export declare function resolveBasePalette(options: PaletteOptions): BasePalette;
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
export declare function driftColor(input: DriftInput): Oklch;
export declare function formatOklch(color: Oklch): string;
/** Derives a default glow color (used in the box-shadow) from a blob's base color. */
export declare function deriveGlow(color: Oklch, alpha?: number): string;
