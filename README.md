# Project Repository

## Overview

This repository contains the source code for **_Job Board: USWDS Demo_**, a full-stack application leveraging the Supabase platform for
backend services and a React/TypeScript interface for the frontend.

`**Job Board: USWDS Demo**` is a full-suite demonstration of my ability to work in advanced USWDS, showcasing comprehensive implementation of USWDS design patterns, accessibility best practices, and responsive component integration.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend/Database**: Supabase (PostgreSQL)
- **Tooling**: Node.js, Yarn 4, Supabase CLI
- **Version**: 0.1.0

This repository is split into two folders:

- `frontend`: React 19 + TypeScript + Vite, configured with the React Compiler.
- `backend`: Supabase CLI workspace for local database, auth, and API development.

The Phase 1 foundation includes:

- React Router routes for `/`, `/jobs`, and `/jobs/:jobId`
- USWDS baseline styles
- Typed Supabase job data services
- URL-backed search and filter state utilities
- Public read-only `companies` and `jobs` tables
- Seed data for 12 companies and 24 structured jobs

## Project layout

```text
.
|-- backend/
|   |-- package.json
|   `-- supabase/
|-- frontend/
|   |-- package.json
|   `-- src/
|-- .yarnrc.yml
|-- package.json
|-- yarn.lock
`-- README.md
```

## Prerequisites

Before building the project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (`^20.19.0` or `>=22.12.0`)
- Corepack, included with supported Node.js releases
- Docker (Required to run Supabase locally)

## Getting started

1. Enable Corepack and install dependencies from the repository root:

   ```bash
   corepack enable
   yarn install --immutable
   ```

2. Start the local Supabase stack:

   ```bash
   yarn supabase:start
   ```

3. Copy `frontend/.env.local.example` to `frontend/.env.local`.

4. Use the `Project URL` and `Publishable key` shown by `supabase start` to fill in `frontend/.env.local`.

5. Start the frontend:

   ```bash
   yarn dev
   ```

## Useful commands

```bash
yarn build
yarn test
yarn supabase:status
yarn supabase:stop
yarn db:reset
```

`yarn db:reset` applies the job-board schema and reloads the deterministic demo
dataset. Docker must be running before using local Supabase commands.

The repository uses Yarn's `node-modules` linker for compatibility with the
Vite, Vitest, and Testing Library toolchain. Commit `yarn.lock`, package
manifests, and `.yarnrc.yml`; generated `node_modules` and `.yarn` state remain
local.
