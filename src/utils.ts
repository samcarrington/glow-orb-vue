export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function normalizeHue(hue: number): number {
  return ((hue % 360) + 360) % 360;
}
