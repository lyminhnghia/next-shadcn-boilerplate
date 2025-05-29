<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>Next.js Starter Template With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js 15 App Router</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 15](https://nextjs.org/15)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS v4](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Search params state manager - [Nuqs](https://nuqs.47ng.com/)
- Tables - [Tanstack Data Tables](https://ui.shadcn.com/docs/components/data-table) • [Dice table](https://www.diceui.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

## Feature based organization

```plaintext
.storybook/ # Storybook directory
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ │ ├── (signin)/
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── page.tsx
│ └── api/ # API routes
├── components/ # Shared components
│ ├── ui/     # UI components (buttons, inputs, etc.)
│ └── layout/ # Layout components (header, sidebar, etc.)
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/    # Server actions
│ │ ├── schemas/    # Form validation schemas
│ │ └── utils/      # Feature-specific utilities
├── hooks/ # Custom hooks
│ └── use-debounce.ts
├── lib/ # Core utilities and configurations
│ ├── auth/  # Auth configuration
│ ├── db/    # Database utilities
│ └── utils/ # Shared utilities
├── services/ # Services provider
| ├── api/        # Api services
│ └── websocket/  # Websocket services
├── stores/ # Zustand stores
│ ├── *-store.ts
│ ├── types.ts
│ └── utils.ts
├── styles/ # Config global styles and themes
└── types/  # TypeScript types
```

## Getting Started

> [!NOTE]  
> We are using **Next 15** with **React 19**, follow these steps:

Clone the repo:

```
git clone https://github.com/lyminhnghia/next-shadcn-boilerplate.git
```

- `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `pnpm run dev`

##### Environment Configuration Setup

To configure the environment for this project, refer to the `env.example.txt` file. This file contains the necessary environment variables required for authentication and error tracking.

You should now be able to access the application at http://localhost:3000.

> [!WARNING]
> After cloning or forking the repository, be cautious when pulling or syncing with the latest changes, as this may result in breaking conflicts.

Cheers! 🥂
