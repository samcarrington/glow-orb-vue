# Contributing

Thanks for contributing to `glow-orb-vue`.

## Local setup

Use Node.js 22 or later and the pnpm version pinned in `package.json`.

```sh
corepack enable
pnpm install
```

Before opening a pull request, run:

```sh
pnpm typecheck
pnpm test
pnpm exec biome check .
pnpm build
```

Commit source changes in `src/`; `dist/` is the committed package output, so rebuild it when a source change affects the published package. Keep changes focused and add or update tests for behaviour changes.

## Pull requests

Describe the user-facing change, note any accessibility or motion implications, and include tests that cover the change. Do not include unrelated formatting changes.

## Releases

Releases are published from a GitHub Release, not from a developer machine.

1. Ensure the version in `package.json` is the intended next semantic version and the lockfile is current (`pnpm install --frozen-lockfile` must pass).
2. Run all checks above and inspect the package with `npm pack --dry-run`.
3. Commit the release, create and push a matching `v<version>` tag, then create a GitHub Release from that tag.
4. The `publish.yml` workflow builds, tests, and publishes to npm through npm trusted publishing.

Before the first automated release, configure a trusted publisher in the npm package settings:

- GitHub owner: `samcarrington`
- Repository: `glow-orb-vue`
- Workflow filename: `publish.yml`
- Allowed action: `npm publish`

The workflow uses short-lived OpenID Connect credentials; do not add an `NPM_TOKEN` secret for publishing. npm will create provenance automatically when the repository and package are public.

## Code of conduct

Be constructive, respectful, and considerate in issues, pull requests, and reviews.
