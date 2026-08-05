import { Ref } from 'vue';
/**
 * Reproduces the "make the orb feel alive on rollover" trick: instead of a flat
 * opacity/scale hover, drives a reactive `env` ref with a synthetic, layered-sine
 * "fake speech" signal, smoothed frame-to-frame. Bind the ref to a GlowOrb's
 * `env` prop.
 *
 * Usage:
 *   const env = ref(0);
 *   useHoverPreview(cardEl, env, { seed: 0 });
 */
export interface UseHoverPreviewOptions {
  seed?: number;
}
export declare function useHoverPreview(
  targetRef: Ref<HTMLElement | null>,
  envRef: Ref<number>,
  options?: UseHoverPreviewOptions
): void;
