import { describe, expect, test } from 'vitest';
import {
  deriveGlow,
  driftColor,
  formatOklch,
  resolveBasePalette,
} from './color';

describe('resolveBasePalette', () => {
  test('parses explicit shades into oklch colors, preserving order', () => {
    // Arrange
    const shades: [string, string, string] = ['#4f46e5', '#a78bfa', '#818cf8'];

    // Act
    const palette = resolveBasePalette({ shades });

    // Assert
    expect(palette.blob0.mode).toBe('oklch');
    expect(palette.blob1.mode).toBe('oklch');
    expect(palette.blob2.mode).toBe('oklch');
  });

  test('parses rgb()/rgba() and hsl()/hsla() shade strings', () => {
    // Arrange
    const shades: [string, string, string] = [
      'rgb(79, 70, 229)',
      'rgba(167, 139, 250, 0.5)',
      'hsl(240, 83%, 60%)',
    ];

    // Act
    const palette = resolveBasePalette({ shades });

    // Assert
    expect(palette.blob0.mode).toBe('oklch');
    expect(palette.blob1.alpha).toBeCloseTo(0.5);
    expect(palette.blob2.mode).toBe('oklch');
  });

  test('parses alpha from 8-digit hex and hsla() shade strings', () => {
    // Arrange
    const shades: [string, string, string] = [
      '#4f46e580',
      '#a78bfa',
      'hsla(265, 83%, 60%, 0.25)',
    ];

    // Act
    const palette = resolveBasePalette({ shades });

    // Assert
    expect(palette.blob0.alpha).toBeCloseTo(0.5, 1);
    expect(palette.blob2.alpha).toBeCloseTo(0.25);
  });

  test('throws a clear error when a shade string cannot be parsed', () => {
    // Arrange
    const shades: [string, string, string] = [
      'not-a-color',
      '#a78bfa',
      '#818cf8',
    ];

    // Act & Assert
    expect(() => resolveBasePalette({ shades })).toThrow(
      /could not parse shade color/
    );
  });

  test('derives three distinct hues from a base hue when shades are omitted', () => {
    // Arrange & Act
    const palette = resolveBasePalette({ hue: 200 });

    // Assert
    expect(palette.blob0.h).toBeCloseTo(200);
    expect(palette.blob1.h).not.toBeCloseTo(palette.blob0.h ?? 0);
    expect(palette.blob2.h).not.toBeCloseTo(palette.blob0.h ?? 0);
  });

  test('uses secondaryHue for blob1 when provided', () => {
    // Arrange & Act
    const palette = resolveBasePalette({ hue: 10, secondaryHue: 300 });

    // Assert
    expect(palette.blob1.h).toBeCloseTo(300);
  });
});

describe('driftColor', () => {
  test('leaves hue/lightness/chroma unchanged when hueShift and intensity are 0', () => {
    // Arrange
    const base = resolveBasePalette({ hue: 120 }).blob0;

    // Act
    const drifted = driftColor({
      base,
      time: 5,
      hueShift: 0,
      intensity: 0,
      offset: 0,
    });

    // Assert
    expect(drifted.h).toBeCloseTo(base.h ?? 0);
    expect(drifted.l).toBeCloseTo(base.l);
    expect(drifted.c).toBeCloseTo(base.c);
  });

  test('shifts hue over time proportionally to hueShift', () => {
    // Arrange
    const base = resolveBasePalette({ hue: 120 }).blob0;

    // Act
    const drifted = driftColor({
      base,
      time: 1,
      hueShift: 1,
      intensity: 0,
      offset: 0,
    });

    // Assert
    expect(drifted.h).not.toBeCloseTo(base.h ?? 0);
  });
});

describe('formatOklch', () => {
  test('formats a color object as a CSS oklch() string', () => {
    // Arrange
    const color = { mode: 'oklch' as const, l: 0.65, c: 0.19, h: 265 };

    // Act
    const css = formatOklch(color);

    // Assert
    expect(css).toBe('oklch(65.0% 0.190 265.0)');
  });
});

describe('deriveGlow', () => {
  test('returns an rgba() string derived from an oklch color', () => {
    // Arrange
    const color = { mode: 'oklch' as const, l: 0.65, c: 0.19, h: 265 };

    // Act
    const glow = deriveGlow(color, 0.6);

    // Assert
    expect(glow).toMatch(/^rgba\(\d+, \d+, \d+, 0\.6\)$/);
  });
});
