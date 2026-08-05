export interface GlowOrbProps {
  /** Diameter of the orb, in pixels. */
  size?: number;
  /** Explicit colors for the three blobs. Takes precedence over hue/secondaryHue. */
  shades?: [string, string, string];
  /** Base hue (0-360) used to generate blob colors when `shades` is omitted. */
  hue?: number;
  /** Secondary hue (0-360) for the second blob when `shades` is omitted. */
  secondaryHue?: number;
  /** Saturation/lightness swing over time, 0-1. */
  intensity?: number;
  /** Amount of slow hue drift over time, 0-1. */
  hueShift?: number;
  /** CSS color fed into the box-shadow glow. Derived from the palette if omitted. */
  glow?: string;
  /** Baseline energy: scales motion speed and position/scale amplitude. */
  excitement?: number;
  /** Shape contortion depth: scales border-radius and rotation amplitude only. */
  warp?: number;
  /** Per-blob desync offset, in seconds. */
  phase?: number;
  /** Live overlay (e.g. hover envelope), 0-1, additive on top of the baseline. */
  env?: number;
}
declare const __VLS_export: import('vue').DefineComponent<
  GlowOrbProps,
  {},
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').PublicProps,
  Readonly<GlowOrbProps> & Readonly<{}>,
  {
    size: number;
    intensity: number;
    hueShift: number;
    excitement: number;
    warp: number;
    phase: number;
    env: number;
  },
  {},
  {},
  {},
  string,
  import('vue').ComponentProvideOptions,
  false,
  {},
  any
>;
declare const _default: typeof __VLS_export;
export default _default;
