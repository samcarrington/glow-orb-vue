# AGENTS.md

Vue 3 + TypeScript component library (`glow-orb-vue`) - an animated "molten orb" component reproducing the talk.deepgram.com effect. Library entry point: `src/index.ts`. Only `dist/` is published (see `package.json` `files`).

## Package manager

Use **pnpm** only (pinned via `packageManager` field: pnpm@11.20.0). Do not use npm or yarn - no lockfiles for them exist.

```bash
pnpm install
```

## Commands

```bash
pnpm run dev         # demo app via Vite, config at demo/vite.config.ts, port 5173
pnpm run build        # vue-tsc -b (typecheck+declarations) THEN vite build - order matters
pnpm test             # vitest run
pnpm run typecheck    # vue-tsc --noEmit
pnpm run lint         # biome check --write .  (MODIFIES FILES - not just a check)
pnpm run format       # biome format --write . (MODIFIES FILES)
```

Run a single test file or test name:

```bash
pnpm exec vitest run src/color.test.ts
pnpm exec vitest run -t "test name"
```

CI (`.github/workflows/ci.yml`) runs on push to `main` and on PRs: `pnpm install --frozen-lockfile` -> `pnpm typecheck` -> `pnpm test` -> `pnpm exec biome check .` (read-only, unlike the local `lint` script) -> `pnpm build` -> `npm pack --dry-run`. There is no separate lint-check/format-check script locally - `pnpm run lint` and `pnpm run format` both write changes directly, so use `pnpm exec biome check .` if you need a non-mutating check matching CI.

`.github/workflows/publish.yml` runs on GitHub release publish: install, typecheck, test, build, then `npm publish` (npm 11.5.1, provenance via `id-token: write`).

## Build/toolchain notes

- `vite.config.ts` externalizes `vue` from the library bundle and generates types via `vite-plugin-dts` with `include: ['src']`, `exclude: ['src/**/*.test.ts']`, `rollupTypes: true`.
- Biome (`biome.json`) lints `src/**/*` and `demo/**/*`; it excludes `dist`, `node_modules`, `docs`. Vue SFCs disable the unused-vars/unused-imports rules (needed for `<script setup>` template-only usage).
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters` enabled - unused locals/params will fail typecheck and build.
- No env files, DB, migrations, or codegen steps beyond the dts generation above.
- `vitest.config.ts` uses `environment: 'node'` (not jsdom/happy-dom) but includes the `@vitejs/plugin-vue` plugin so SFC/`GlowOrb.vue` component tests (e.g. `src/GlowOrb.test.ts`) can compile and mount via `@vue/test-utils`.
