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
export declare function computeBlobFrame(input: BlobFrameInput): BlobFrame;
