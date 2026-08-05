<script setup lang="ts">
import { GlowOrb, useHoverPreview } from 'glow-orb-vue';
import { ref } from 'vue';

interface OrbCardConfig {
  name: string;
  hue: number;
  excitement: number;
  warp: number;
  phase: number;
  intensity: number;
  hueShift: number;
  brandGlow: string;
  brandMid: string;
}

const cards: OrbCardConfig[] = [
  {
    name: 'Indigo',
    hue: 265,
    excitement: 1,
    warp: 1,
    phase: 0.09,
    intensity: 0.5,
    hueShift: 0.15,
    brandGlow: 'rgb(79, 70, 229)',
    brandMid: '#a78bfa',
  },
  {
    name: 'Emerald',
    hue: 160,
    excitement: 1.4,
    warp: 0.6,
    phase: 0.22,
    intensity: 0.7,
    hueShift: 0.3,
    brandGlow: 'rgb(16, 185, 129)',
    brandMid: '#6ee7b7',
  },
  {
    name: 'Rose',
    hue: 350,
    excitement: 0.7,
    warp: 1.6,
    phase: 0.05,
    intensity: 0.35,
    hueShift: 0.05,
    brandGlow: 'rgb(244, 63, 94)',
    brandMid: '#fda4af',
  },
];

const cardEls = cards.map(() => ref<HTMLElement | null>(null));
const envs = cards.map(() => ref(0));

cards.forEach((_, i) => {
  useHoverPreview(cardEls[i], envs[i], { seed: i });
});
</script>

<template>
  <button
    v-for="(card, i) in cards"
    :key="card.name"
    :ref="(el) => (cardEls[i].value = el as HTMLElement | null)"
    class="glow-card"
    :style="{ '--brand-glow': card.brandGlow, '--brand-mid': card.brandMid }"
  >
    <div class="orb-stage">
      <div class="orb-ground" aria-hidden="true">
        <span class="ground-pool"></span>
        <span class="ground-contact"></span>
      </div>
      <GlowOrb
        :size="132"
        :hue="card.hue"
        :excitement="card.excitement"
        :warp="card.warp"
        :phase="card.phase"
        :intensity="card.intensity"
        :hue-shift="card.hueShift"
        :glow="card.brandGlow"
        :env="envs[i].value"
      />
    </div>
    <div class="plate">
      <span class="name">{{ card.name }}</span>
    </div>
    <span class="cta">Click to Talk</span>
  </button>

  <section class="usage" aria-labelledby="usage-heading">
    <h1 id="usage-heading">Usage</h1>
    <p>Install the package:</p>
    <pre><code>pnpm add glow-orb-vue</code></pre>
    <p>Use the component:</p>
    <pre><code>&lt;script setup lang="ts"&gt;
import { GlowOrb } from 'glow-orb-vue';
import 'glow-orb-vue/style.css';
&lt;/script&gt;

&lt;template&gt;
  &lt;GlowOrb :size="160" :hue="265" :hue-shift="0.15" /&gt;
&lt;/template&gt;</code></pre>

    <h2>Props</h2>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>size</td>
          <td>number</td>
          <td>132</td>
          <td>Orb diameter in pixels.</td>
        </tr>
        <tr>
          <td>shades</td>
          <td>[string, string, string]</td>
          <td>—</td>
          <td>Three explicit CSS colours. Takes precedence over hue values.</td>
        </tr>
        <tr>
          <td>hue</td>
          <td>number</td>
          <td>265</td>
          <td>Base hue from 0-360.</td>
        </tr>
        <tr>
          <td>secondaryHue</td>
          <td>number</td>
          <td>hue + 35</td>
          <td>Hue used for the second blob.</td>
        </tr>
        <tr>
          <td>intensity</td>
          <td>number</td>
          <td>0.5</td>
          <td>Colour lightness and chroma movement, from 0-1.</td>
        </tr>
        <tr>
          <td>hueShift</td>
          <td>number</td>
          <td>0</td>
          <td>Slow hue drift, from 0-1.</td>
        </tr>
        <tr>
          <td>glow</td>
          <td>string</td>
          <td>derived</td>
          <td>CSS colour used by the outer glow.</td>
        </tr>
        <tr>
          <td>excitement</td>
          <td>number</td>
          <td>1</td>
          <td>Motion speed and position/scale amplitude.</td>
        </tr>
        <tr>
          <td>warp</td>
          <td>number</td>
          <td>1</td>
          <td>Shape and rotation contortion depth.</td>
        </tr>
        <tr>
          <td>phase</td>
          <td>number</td>
          <td>0.09</td>
          <td>Per-blob desynchronisation in seconds.</td>
        </tr>
        <tr>
          <td>env</td>
          <td>number</td>
          <td>0</td>
          <td>Additional live energy, from 0-1.</td>
        </tr>
      </tbody>
    </table>
    <p class="usage-note">
      Values outside stated 0-1 ranges are clamped where applicable; the component respects
      <code>prefers-reduced-motion</code>.
    </p>
  </section>
</template>

<style scoped>
/*
 * Rollover-state pattern reproduced from talk.deepgram.com's voice-select cards.
 * Pairs a GlowOrb with useHoverPreview() for the "orb comes alive" hover behavior.
 */
.glow-card {
  --orb: 132px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
}

.glow-card .orb-stage {
  position: relative;
  z-index: 1;
  line-height: 0;
  transition:
    transform 0.45s cubic-bezier(0.34, 1.4, 0.4, 1),
    filter 0.45s ease;
}
.glow-card:hover .orb-stage,
.glow-card:focus-visible .orb-stage {
  transform: scale(1.08);
  filter: brightness(1.12);
}

.glow-card .orb-ground {
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: calc(var(--orb) * 0.6);
  height: calc(var(--orb) * 0.15);
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
}
.glow-card .ground-pool {
  position: absolute;
  inset: 0;
  left: 50%;
  top: 40%;
  width: 110%;
  height: 150%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    color-mix(in srgb, var(--brand-glow) 55%, transparent) 0%,
    color-mix(in srgb, var(--brand-mid) 28%, transparent) 40%,
    transparent 70%
  );
  filter: blur(7px);
  opacity: 0.85;
}
.glow-card .ground-contact {
  position: absolute;
  left: 50%;
  top: 45%;
  width: 52%;
  height: 42%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 38%,
    transparent 72%
  );
  filter: blur(1px);
}

.glow-card .plate {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  width: 180px;
  margin-top: calc(var(--orb) * -0.61);
  padding: calc(var(--orb) * 0.7) 0 22px;
  background: #24242b;
  border: 1px solid #3a3a44;
  border-radius: 10px;
  transition: background 0.35s ease, border-color 0.35s ease;
}
.glow-card:hover .plate,
.glow-card:focus-visible .plate {
  background: #2a2a32;
  border-color: #4a4a56;
}

.glow-card .name {
  font-weight: 500;
  font-size: 15px;
  color: #fbfbff;
}

.glow-card .cta {
  margin-top: 12px;
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.48);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

:global(#app) {
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 64px 16px;
}

.usage {
  flex: 0 0 100%;
  max-width: 960px;
  color: #fbfbff;
}

.usage h1,
.usage h2 {
  margin: 0 0 16px;
}

.usage p {
  color: rgba(255, 255, 255, 0.72);
}

.usage pre {
  overflow-x: auto;
  margin: 12px 0 28px;
  padding: 16px;
  background: #16161d;
  border: 1px solid #3a3a44;
  border-radius: 8px;
  color: #d9d7ff;
}

.usage table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
}

.usage th,
.usage td {
  padding: 10px 12px;
  border-bottom: 1px solid #3a3a44;
  vertical-align: top;
}

.usage th {
  color: #fbfbff;
}

.usage-note {
  font-size: 13px;
}

@media (max-width: 720px) {
  .usage {
    overflow-x: auto;
  }

  .usage table {
    min-width: 720px;
  }
}
.glow-card:hover .cta,
.glow-card:focus-visible .cta {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .glow-card .orb-stage {
    transition: none;
  }
}
</style>
