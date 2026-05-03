# AGENTS.md

## Dev Commands

```bash
pnpm build          # Build all packages (theme-chalk then components)
pnpm build:theme    # Build only theme-chalk
pnpm build:components # Build only components
pnpm docs:dev       # Run VitePress docs dev server (port 1999)
pnpm docs:build     # Build VitePress docs
```

## Packages

| Package | Name |
|---------|------|
| `@gausszhou/ui-vue-components` | components |
| `@gausszhou/ui-vue-theme-chalk` | theme-chalk |
| `@gausszhou/ui-vue-docs` | docs |

Component prefix: `G` (e.g., `GButton`, `GRow`, `GCol`)

## Build Order

Theme-chalk must build before components (components depends on theme-chalk).

## Notes

- No test/typecheck scripts
- lint-staged runs on commit (eslint + prettier)
- pnpm workspace with `packageManager` constraint (root: pnpm@10.33.2, packages: pnpm@10.6.2)
- Build outputs to `packages/*/dist/`