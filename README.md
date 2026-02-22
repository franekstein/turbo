# Turbo Monorepo

A monorepo powered by [Turborepo](https://turbo.build/repo), [pnpm](https://pnpm.io/), and [shadcn/ui](https://ui.shadcn.com/). Ships a Next.js 16 web app, a shared UI component library, and a Storybook playground.

## What's Inside

### Apps

| App | Description | Port |
| --- | --- | --- |
| **[web](apps/web)** | Next.js 16 app with Turbopack, React 19, and Tailwind CSS 4 | `3000` |
| **[storybook](apps/storybook)** | Storybook 9 for developing and documenting UI components | `6006` |

### Packages

| Package | Description |
| --- | --- |
| **[@workspace/ui](packages/ui)** | Shared React component library built on shadcn/ui, Base UI, Tailwind CSS 4, and CVA |
| **[@workspace/typescript-config](packages/typescript-config)** | Shared TypeScript configuration |

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) 10.4.1+

## Getting Started

```bash
# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev

# Start only the web app
pnpm --filter web dev

# Start only Storybook
pnpm --filter storybook dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint the entire codebase with Biome |
| `pnpm format` | Auto-fix lint and formatting issues with Biome |
| `pnpm typecheck` | Run TypeScript type checking across all packages |
| `pnpm check-dependencies` | Validate dependency consistency with Sherif |
| `pnpm clean` | Remove all `node_modules` directories |
| `pnpm bump-ui` | Update all shadcn/ui components in `@workspace/ui` |

## Tooling

| Tool | Purpose |
| --- | --- |
| [Turborepo](https://turbo.build/repo) | Monorepo orchestration, caching, and task pipelines |
| [pnpm](https://pnpm.io/) | Fast, disk-efficient package manager with workspace support |
| [Biome](https://biomejs.dev/) | Linting and formatting (replaces ESLint + Prettier) |
| [Ultracite](https://github.com/haydenbleasel/ultracite) | Opinionated Biome preset for React and Next.js |
| [Lefthook](https://github.com/evilmartians/lefthook) | Git hooks manager (runs Ultracite on pre-commit) |
| [Sherif](https://github.com/nicolo-ribaudo/sherif) | Monorepo dependency consistency checker |
| [Changesets](https://github.com/changesets/changesets) | Versioning and changelog management |
| [Chromatic](https://www.chromatic.com/) | Visual regression testing for Storybook |

## Project Structure

```
turbo/
├── apps/
│   ├── web/              # Next.js 16 application
│   └── storybook/        # Storybook 9 playground
├── packages/
│   ├── ui/               # Shared UI components (shadcn/ui)
│   └── typescript-config/ # Shared tsconfig presets
├── turbo.json            # Turborepo pipeline configuration
├── biome.jsonc           # Biome linter/formatter config
├── lefthook.yml          # Git hooks configuration
├── pnpm-workspace.yaml   # pnpm workspace definition
└── package.json          # Root scripts and devDependencies
```

## UI Components

The `@workspace/ui` package contains all shared components built on [shadcn/ui](https://ui.shadcn.com/). To add a new component:

```bash
pnpm bump-ui
```

This pulls the latest versions of all shadcn/ui components into `packages/ui`.

To use components in an app:

```tsx
import { Button } from "@workspace/ui/components/button";
```

Styles are exported from the UI package and should be imported in consuming apps:

```css
@import "@workspace/ui/styles/globals.css";
```

## Editor Setup

The repo includes VS Code settings and recommended extensions:

- **[Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)** - Formatting and linting
- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** - Autocomplete for Tailwind classes (including `cva` and `cn` helpers)

Format-on-save and organize-imports-on-save are enabled by default.
