# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev          # Start Vite dev server with HMR
pnpm build        # TypeScript check + production build (tsc -b && vite build)
pnpm lint         # ESLint with TypeScript rules
pnpm preview      # Preview production build locally
```

Package manager: **pnpm**

## Architecture

Single-page React 19 portfolio site built with Vite 7, TypeScript (strict mode), and Tailwind CSS 4.

**App structure** (`src/App.tsx`): Linear section layout rendered in order:
Navbar → About → FeaturedProjects → Games → Contact → BoringSection → Footer

Each section is its own component in `src/`. Navigation uses smooth scroll to section IDs.

**Path alias**: `@` maps to `./src` (configured in both vite.config.ts and tsconfig).

## Key Patterns

- **UI components**: shadcn/ui (New York style) in `src/components/ui/`, configured via `components.json`. Uses `cn()` from `src/lib/utils.ts` for class merging (clsx + tailwind-merge).
- **Project cards**: Individual components per project (ECommerceFeature, ThreeJSProjectCard, PixiSlotsCard, etc.) composed into FeaturedProjects grid.
- **Data**: Skills and nav items centralized in `src/data.tsx`.
- **Animations**: Custom keyframes defined in `tailwind.config.js` + CSS animations in `src/animations.css`. Extensive hover/fade/float effects.
- **Fonts**: Custom families Monoton, Oswald, Caprasimo configured in Tailwind. Ubuntu font applied via `.ubuntu-font` class.

## Deployment & Forms

- Deploys to **Netlify**. Contact form uses Netlify Forms with honeypot spam protection.
- Form submissions POST to `/_netlify/forms/contact`.
- Netlify functions directory: `netlify/functions/`.
- Static assets (resume PDF, project GIFs, images) live in `public/`.
