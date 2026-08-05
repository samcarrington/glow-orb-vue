import { describe, expect, test } from 'vitest';
import { computeBlobFrame } from './animation';

describe('computeBlobFrame', () => {
  test('matches the original glow-orb.js formula at default excitement/warp/phase', () => {
    // Arrange
    const time = 1.7;

    // Act
    const frame = computeBlobFrame({
      time,
      blobIndex: 0,
      excitement: 1,
      warp: 1,
      phase: 0.09,
      env: 0,
    });

    // Assert
    const t = time;
    expect(frame.x).toBeCloseTo(
      Math.sin(t * 0.31) * 18 + Math.sin(t * 0.83) * 9 + Math.cos(t * 0.17) * 6
    );
    expect(frame.y).toBeCloseTo(
      Math.cos(t * 0.26) * 16 + Math.sin(t * 0.69) * 8
    );
    expect(frame.rotation).toBeCloseTo(
      Math.sin(t * 0.19) * 120 + Math.sin(t * 0.53) * 30
    );
  });

  test('freezes position amplitude to zero when excitement is 0', () => {
    // Arrange & Act
    const frame = computeBlobFrame({
      time: 4,
      blobIndex: 0,
      excitement: 0,
      warp: 1,
      phase: 0.09,
      env: 0,
    });

    // Assert
    expect(frame.x).toBe(0);
    expect(frame.scaleX).toBeCloseTo(1.1);
    expect(frame.scaleY).toBeCloseTo(1.1);
  });

  test('collapses border-radius to a plain circle and removes rotation when warp is 0', () => {
    // Arrange & Act
    const frame = computeBlobFrame({
      time: 2.3,
      blobIndex: 1,
      excitement: 1,
      warp: 0,
      phase: 0.09,
      env: 0,
    });

    // Assert
    expect(frame.rotation).toBe(0);
    expect(frame.borderRadius).toBe('50% 50% 50% 50% / 50% 50% 50% 50%');
  });

  test('produces identical frames for every blob index when phase is 0', () => {
    // Arrange & Act
    const frameA = computeBlobFrame({
      time: 3.1,
      blobIndex: 0,
      excitement: 1,
      warp: 1,
      phase: 0,
      env: 0,
    });
    const frameB = computeBlobFrame({
      time: 3.1,
      blobIndex: 2,
      excitement: 1,
      warp: 1,
      phase: 0,
      env: 0,
    });

    // Assert
    expect(frameB).toEqual(frameA);
  });

  test('clamps env to the 0..1 range', () => {
    // Arrange & Act
    const overshoot = computeBlobFrame({
      time: 1,
      blobIndex: 0,
      excitement: 1,
      warp: 1,
      phase: 0.09,
      env: 5,
    });
    const clamped = computeBlobFrame({
      time: 1,
      blobIndex: 0,
      excitement: 1,
      warp: 1,
      phase: 0.09,
      env: 1,
    });
    const undershoot = computeBlobFrame({
      time: 1,
      blobIndex: 0,
      excitement: 1,
      warp: 1,
      phase: 0.09,
      env: -5,
    });
    const zero = computeBlobFrame({
      time: 1,
      blobIndex: 0,
      excitement: 1,
      warp: 1,
      phase: 0.09,
      env: 0,
    });

    // Assert
    expect(overshoot).toEqual(clamped);
    expect(undershoot).toEqual(zero);
  });
});
