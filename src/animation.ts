/**
 * Pure motion math for a single blob, extracted from the original glow-orb.js
 * tick loop so it can be unit tested independent of the DOM/RAF loop.
 */
import { clamp } from './utils';

export interface BlobFrameInput {
  /** Orb-local elapsed seconds (frozen by the caller under reduced motion). */
  time: number;
  /** Which of the three blobs this frame is for (0, 1, 2). */
  blobIndex: number;
  /** Baseline energy: scales phase speed and position/scale amplitude. */
  excitement: number;
  /** Shape contortion depth: scales border-radius and rotation amplitude only. */
  warp: number;
  /** Per-blob desync offset, in seconds. */
  phase: number;
  /** Live overlay (e.g. hover envelope), 0..1, additive on top of the baseline. */
  env: number;
}

export interface BlobFrame {
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  borderRadius: string;
}

export function computeBlobFrame(input: BlobFrameInput): BlobFrame {
  const excitement = Math.max(0, input.excitement);
  const warp = Math.max(0, input.warp);
  const env = clamp(input.env, 0, 1);
  const t = input.time * excitement - input.blobIndex * input.phase;

  const x =
    Math.sin(t * 0.31) * 18 * excitement +
    Math.sin(t * 0.83) * 9 * excitement +
    Math.cos(t * 0.17) * 6 * excitement;
  const y =
    Math.cos(t * 0.26) * 16 * excitement +
    Math.sin(t * 0.69) * 8 * excitement -
    env * 8;
  const rotation =
    Math.sin(t * 0.19) * 120 * warp + Math.sin(t * 0.53) * 30 * warp;
  const scaleX = 1.1 + 0.3 * excitement * Math.sin(t * 0.47) + env * 0.08;
  const scaleY = 1.1 + 0.3 * excitement * Math.sin(t * 0.61 + 2.1) + env * 0.3;

  // Clamped to [0, 100]: border-radius percentages outside that range are
  // invalid CSS and browsers drop the whole declaration, not just the offending value.
  const r1 = clamp(50 + 22 * warp * Math.sin(t * 0.41), 0, 100);
  const r2 = clamp(50 + 22 * warp * Math.sin(t * 0.57 + 1.4), 0, 100);
  const r3 = clamp(50 + 22 * warp * Math.sin(t * 0.33 + 2.9), 0, 100);
  const r4 = clamp(50 + 22 * warp * Math.sin(t * 0.71 + 4.2), 0, 100);

  const borderRadius = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`;

  return { x, y, rotation, scaleX, scaleY, borderRadius };
}
