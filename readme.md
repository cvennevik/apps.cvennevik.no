# apps.cvennevik.no

This is the source code of https://apps.cvennevik.no/.

## How to run locally

### Requirements

- Node v16.7.0 or greater (for the `fs/promises/cp` function )
- pnpm v8.6.3 or other compatible version
  - If you have to install it, I suggest using corepack, which is bundled with Node.js: https://pnpm.io/installation#using-corepack

### Instructions

- Install dependencies: `pnpm install`
- Build: `pnpm build`
- Serve built app locally: `pnpm preview`
