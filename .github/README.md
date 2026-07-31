My personal portfolio website built with **Astro**, **Svelte**, **Tailwind CSS v4**, and **TypeScript**.

The website showcases my experience, education, projects, technical skills, and contact information through a lightweight, mostly static interface.

## Stack

- Astro 7
- Svelte 5
- Tailwind CSS v4
- TypeScript
- Astro Icon (Iconify)

## Features

- Static-first architecture
- Client-side interactive experience section using Svelte
- Responsive layout
- Custom Maple Mono font
- Iconify integration
- Nix Flake development environment
- Reproducible Nix build

## Development

### Requirements

- Node.js >= 22.12
- pnpm

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Run type checking:

```bash
pnpm check
```

## Nix

This repository includes a Nix Flake that provides both a development shell and a reproducible package build.

Enter the development environment:

```bash
nix develop
```

Build the website:

```bash
nix build
```

## Just Commands

The project also includes a `justfile` for common tasks.

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `just run`       | Start the development server |
| `just build`     | Build the project            |
| `just nix-build` | Build using Nix              |
| `just fmt`       | Format Nix and project files |
| `just up`        | Upgrade dependencies         |

## Project Structure

```
src/
├── components/     # Astro and Svelte components
├── layouts/        # Shared layouts
├── lib/
│   ├── consts/     # Portfolio data
│   └── types/      # TypeScript types
├── pages/          # Route pages
└── styles/         # Global styles
```

Most of the site's content is defined as TypeScript constants inside `src/lib/consts`, making it easy to update projects, experience, education, certifications, technologies, and social links without modifying the UI.
