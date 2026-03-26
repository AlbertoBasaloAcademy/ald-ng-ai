# NG AI

- Root folder: `/`
- Agents folder: `/.github`
- Project folder: `/project`
- Agents file: `/AGENTS.md`

## Product Overview

AstroBookings is a frontend SPA for rocket launch bookings.
The app consumes a local API and showcases Angular best practices.

## Technical Implementation

Use Angular v19+ with standalone components and strict TypeScript.
Prefer signals for local state and clear route-level separation.
Use API-first flows for rockets, launches, customers, and bookings.

### Tech Stack
- **Language**: TypeScript
- **Framework**: Angular v19+
- **State Management**: Angular Signals
- **Build Tools**: Angular CLI
- **Testing**: Jasmine/Karma
- **E2E**: Playwright

### Workflow Commands

```bash
# Install dependencies
npm install
# Start development server
npm watch
# Run tests
npm test
# Run app
npm start
# Build for production
npm run build
```

### Folder structure

```txt
├── AGENTS.md             # This file with instructions for AI agents
├── .github/              # Agents related files (skills, specs, etc)
|   ├── prompts/          # Reusable prompts directory
|   └── skills/           # Custom agent skills
├── project/              # Project related files (specs, plans, etc)
|   ├── PRD.md            # Product Requirements Document
|   ├── ADD.md            # Architectural Design Document
|   └── specs/            # Specifications and plans
├── CHANGELOG.md          # Project history and changelog
├── README.md             # Human friendly project overview
├── package.json          # NPM package configuration
├── angular.json          # Angular CLI configuration
├── src/                  # Source code with main application code and assets
│   ├── app/              # Angular application configuration and routes
│   │   ├── core/         # Core services and utilities used by the app
│   │   ├── routes/       # Application routes
│   │   └── shared/       # Shared components, directives, and pipes
└── other_files/          # Other relevant files and folders 
```

## Environment

- **OS dev**: Windows 11
- **Terminal**: Git Bash
- **Node Version**: 22.14.0 (managed with fnm)
- **Git remote**: https://github.com/AlbertoBasaloAcademy/ald-ng-ai
- **Default branch**: main

### Behavior Guidelines

- Code and documentation must be in English.
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness when needed to fit response limits.
- Replace all template placeholders with real project paths.
- Keep docs concise and easy to scan for agent orchestration.
- Prioritize feature outcomes over low-level implementation detail.
