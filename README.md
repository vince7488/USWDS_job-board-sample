# Project Repository

## Overview

This repository contains the source code for **_Job Board: USWDS Demo_**, a full-stack application leveraging the Supabase platform for
backend services and a React/TypeScript interface for the frontend.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend/Database**: Supabase (PostgreSQL)
- **Tooling**: Node.js, Supabase CLI, NPM
- **Version**: 0.1.0

This repository is split into two folders:

- `frontend`: React 19 + TypeScript + Vite, configured with the React Compiler.
- `backend`: Supabase CLI workspace for local database, auth, and API development.

## Project layout

```text
.
|-- backend/
|   |-- package.json
|   `-- supabase/
|-- frontend/
|   |-- package.json
|   `-- src/
|-- package.json
`-- README.md
```

## Prerequisites

Before building the project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- Docker (Required to run Supabase locally)

## Getting started

1. Install dependencies from the repository root:

   ```bash
   npm install
   ```

2. Start the local Supabase stack:

   ```bash
   npm run supabase:start
   ```

3. Copy `frontend/.env.local.example` to `frontend/.env.local`.

4. Use the `Project URL` and `Publishable key` shown by `supabase start` to fill in `frontend/.env.local`.

5. Start the frontend:

   ```bash
   npm run dev
   ```

## Useful commands

```bash
npm run build
npm run supabase:status
npm run supabase:stop
npm run db:reset
```
