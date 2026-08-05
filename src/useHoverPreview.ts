import { onMounted, onUnmounted, type Ref } from "vue";

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

function envelope(time: number, phase: number): number {
  const wobble =
    Math.abs(Math.sin(time * 6.9 + phase)) * 0.6 +
    Math.abs(Math.sin(time * 2.3 + phase * 1.7)) * 0.45 +
    Math.abs(Math.sin(time * 13.1 + phase)) * 0.25;
  const gate = Math.sin(time * 1.15 + phase * 2.3) > -0.4 ? 1 : 0.25;
  return Math.min(1, wobble * gate);
}

export function useHoverPreview(
  targetRef: Ref<HTMLElement | null>,
  envRef: Ref<number>,
  options: UseHoverPreviewOptions = {},
): void {
  const seed = options.seed ?? 0;
  let hovering = false;
  let t = 0;
  let current = 0;
  let last = 0;
  let raf = 0;

  function tick(now: number) {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    t += dt;

    const target = hovering ? envelope(t, seed * 7) : 0;
    current += (target - current) * 0.18;
    envRef.value = Number(current.toFixed(3));

    raf = requestAnimationFrame(tick);
  }

  function onEnter(): void {
    hovering = true;
  }
  function onLeave(): void {
    hovering = false;
  }

  onMounted(() => {
    targetRef.value?.addEventListener("pointerenter", onEnter);
    targetRef.value?.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
  });

  onUnmounted(() => {
    cancelAnimationFrame(raf);
    targetRef.value?.removeEventListener("pointerenter", onEnter);
    targetRef.value?.removeEventListener("pointerleave", onLeave);
  });
}
