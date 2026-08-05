<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { computeBlobFrame } from './animation';
import {
  deriveGlow,
  driftColor,
  formatOklch,
  resolveBasePalette,
} from './color';
import type { GlowOrbProps } from './types';

const props = withDefaults(defineProps<GlowOrbProps>(), {
  size: 132,
  intensity: 0.5,
  hueShift: 0,
  excitement: 1,
  warp: 1,
  phase: 0.09,
  env: 0,
});

const blob0El = ref<HTMLDivElement | null>(null);
const blob1El = ref<HTMLDivElement | null>(null);
const blob2El = ref<HTMLDivElement | null>(null);
const blobEls = [blob0El, blob1El, blob2El];

const basePalette = computed(() => {
  try {
    return resolveBasePalette({
      shades: props.shades,
      hue: props.hue,
      secondaryHue: props.secondaryHue,
    });
  } catch (error) {
    console.warn(
      '[GlowOrb] Invalid `shades`, falling back to hue-derived palette:',
      error
    );
    return resolveBasePalette({
      hue: props.hue,
      secondaryHue: props.secondaryHue,
    });
  }
});
const paletteList = computed(() => [
  basePalette.value.blob0,
  basePalette.value.blob1,
  basePalette.value.blob2,
]);
const resolvedGlow = computed(
  () => props.glow ?? deriveGlow(basePalette.value.blob0, 0.6)
);

let raf = 0;
let lastTimestamp = 0;
let elapsed = 0;
let reduced = false;
let lastComputedElapsed: number | null = null;
let reducedMotionQuery: MediaQueryList | null = null;

function updateReducedMotion(): void {
  reduced = reducedMotionQuery?.matches ?? false;
}

function tick(now: number) {
  const dt = Math.min(0.05, (now - (lastTimestamp || now)) / 1000);
  lastTimestamp = now;
  if (!reduced) elapsed += dt;

  // Once reduced motion has frozen `elapsed`, every frame recomputes the same
  // values — skip the work once it's settled instead of redoing it at 60fps.
  if (elapsed !== lastComputedElapsed) {
    lastComputedElapsed = elapsed;

    blobEls.forEach((elRef, i) => {
      const el = elRef.value;
      if (!el) return;

      const frame = computeBlobFrame({
        time: elapsed,
        blobIndex: i,
        excitement: props.excitement,
        warp: props.warp,
        phase: props.phase,
        env: props.env,
      });

      el.style.transform =
        `translate(${frame.x.toFixed(2)}px, ${frame.y.toFixed(2)}px) ` +
        `rotate(${frame.rotation.toFixed(2)}deg) scale(${frame.scaleX.toFixed(3)}, ${frame.scaleY.toFixed(3)})`;
      el.style.borderRadius = frame.borderRadius;

      const drifted = driftColor({
        base: paletteList.value[i],
        time: elapsed,
        hueShift: props.hueShift,
        intensity: props.intensity,
        offset: i * 1.7,
      });
      el.style.background = formatOklch(drifted);
    });
  }

  raf = requestAnimationFrame(tick);
}

onMounted(() => {
  if (typeof matchMedia !== 'undefined') {
    reducedMotionQuery = matchMedia('(prefers-reduced-motion: reduce)');
    updateReducedMotion();
    reducedMotionQuery.addEventListener('change', updateReducedMotion);
  }
  raf = requestAnimationFrame(tick);
});

onUnmounted(() => {
  cancelAnimationFrame(raf);
  reducedMotionQuery?.removeEventListener('change', updateReducedMotion);
});
</script>

<template>
  <div class="glow-orb" :style="{ '--orb-size': `${size}px`, '--orb-glow': resolvedGlow }">
    <div class="lava">
      <div ref="blob0El" class="blob blob0"></div>
      <div ref="blob1El" class="blob blob1"></div>
      <div ref="blob2El" class="blob blob2"></div>
    </div>
  </div>
</template>

<style scoped>
.glow-orb {
  display: inline-block;
  position: relative;
  width: var(--orb-size, 132px);
  height: var(--orb-size, 132px);
  line-height: 0;
  border-radius: 50%;
  background: #101014;
  overflow: hidden;
  box-shadow:
    inset 0 11px 36px 0 var(--orb-glow, rgba(80, 90, 255, 0.6)),
    0 20px 44px -14px var(--orb-glow, rgba(80, 90, 255, 0.6));
  transition: box-shadow 0.4s ease;
}
.lava {
  position: absolute;
  inset: 0;
}
.blob {
  position: absolute;
  border-radius: 50%;
  will-change: transform, border-radius;
}
.blob0 {
  left: 3%;
  top: 50%;
  width: 102%;
  height: 52%;
  filter: blur(9px);
}
.blob1 {
  left: 7%;
  top: 42%;
  width: 94%;
  height: 48%;
  filter: blur(8px);
}
.blob2 {
  left: 30%;
  top: 46%;
  width: 50%;
  height: 26%;
  filter: blur(7px);
}
@media (prefers-reduced-motion: reduce) {
  .blob {
    transform: none !important;
  }
}
</style>
