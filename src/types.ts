export interface GlowOrbProps {
  /** Diameter of the orb, in pixels. */
  size?: number;
  /** Explicit colours for the three blobs. Takes precedence over hue values. */
  shades?: [string, string, string];
  /** Base hue (0–360) used to generate blob colours when `shades` is omitted. */
  hue?: number;
  /** Secondary hue (0–360) for the second blob when `shades` is omitted. */
  secondaryHue?: number;
  /** Saturation and lightness swing over time, from 0–1. */
  intensity?: number;
  /** Amount of slow hue drift over time, from 0–1. */
  hueShift?: number;
  /** CSS colour used for the box-shadow glow. Derived from the palette if omitted. */
  glow?: string;
  /** Baseline energy: scales motion speed and position/scale amplitude. */
  excitement?: number;
  /** Shape contortion depth: scales border-radius and rotation amplitude only. */
  warp?: number;
  /** Per-blob desynchronisation offset, in seconds. */
  phase?: number;
  /** Live overlay (for example, a hover envelope), from 0–1. */
  env?: number;
}
