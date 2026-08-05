# glow-orb-vue

A Vue 3 component for a softly animated, molten glow-orb. It supports independent palettes, motion controls, reduced-motion preferences, and an optional hover-driven energy effect.

## Installation

```sh
pnpm add glow-orb-vue
```

`vue` is a peer dependency, so your application must provide Vue 3.4 or later.

## Usage

If you use a bundler (Vite, webpack, Rollup, etc.), the component's CSS is imported automatically - just import the component:

```vue
<script setup lang="ts">
import { GlowOrb } from 'glow-orb-vue';
</script>

<template>
  <GlowOrb :size="160" :hue="265" :hue-shift="0.15" />
</template>
```

### Without a bundler

If you're loading the package unbundled (a CDN, an import map, or anywhere else that doesn't resolve JS-side CSS imports), import the stylesheet explicitly instead:

```html
<link rel="stylesheet" href="https://unpkg.com/glow-orb-vue/dist/glow-orb-vue.css" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number` | `132` | Orb diameter in pixels. |
| `shades` | `[string, string, string]` | — | Three explicit CSS colours. Takes precedence over `hue` values. |
| `hue` | `number` | `265` | Base hue from 0–360. |
| `secondaryHue` | `number` | `hue + 35` | Hue used for the second blob. |
| `intensity` | `number` | `0.5` | Colour lightness and chroma movement, from 0–1. |
| `hueShift` | `number` | `0` | Slow hue drift, from 0–1. |
| `glow` | `string` | derived | CSS colour used by the outer glow. |
| `excitement` | `number` | `1` | Motion speed and position/scale amplitude. |
| `warp` | `number` | `1` | Shape and rotation contortion depth. |
| `phase` | `number` | `0.09` | Per-blob desynchronisation in seconds. |
| `env` | `number` | `0` | Additional live energy, from 0–1. |

Values outside the stated 0–1 ranges are clamped where applicable. The component respects `prefers-reduced-motion` by freezing its animation.

## Hover preview helper

`useHoverPreview` turns pointer hover on an element into a reactive `env` value. Bind the value to a `GlowOrb` to give it a livelier hover state:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { GlowOrb, useHoverPreview } from 'glow-orb-vue';

const card = ref<HTMLElement | null>(null);
const env = ref(0);

useHoverPreview(card, env, { seed: 1 });
</script>

<template>
  <button ref="card" type="button">
    <GlowOrb :env="env" :hue="160" />
  </button>
</template>
```

The optional `seed` gives multiple hover previews different motion patterns.

## Development

```sh
pnpm install
pnpm dev
```

Run the quality checks with:

```sh
pnpm typecheck
pnpm test
pnpm exec biome check .
pnpm build
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution and release instructions.

## Attribution

The component was inspired by the molten-orb visual treatment at talk.deepgram.com. It is an independent implementation and is not affiliated with, endorsed by, or sponsored by Deepgram.

## Licence

[MIT](LICENSE) © Sam Carrington.
