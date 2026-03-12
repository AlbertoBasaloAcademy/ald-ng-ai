---
name: ng-19-best-practices
description: 'Angular 19 best-practices checklist for standalone APIs, strict TypeScript, zoneless change detection, SSR, hydration, routing, and tests. Use when implementing features, reviewing PRs, or refactoring Angular code.'
argument-hint: 'Task context (feature, file, or PR scope)'
user-invocable: true
---

# Angular 19 Best Practices Checklist

Use this skill as an advisory quick quality gate before finishing Angular changes.

## Priority Profile
- Primary emphasis: API contract discipline.
- Secondary emphasis: strict typing, zoneless behavior, SSR/hydration safety, and test stability.

## When to Use
- Adding or changing Angular components, services, routes, or providers
- Reviewing pull requests in Angular 19 projects
- Refactoring existing Angular code to modern patterns

## Quick Checklist
1. Confirm architecture fit.
- Use standalone APIs and functional providers.
- Avoid introducing NgModules unless explicitly required.
- Keep changes scoped to the requested feature.

2. Confirm typing and domain contracts (high priority).
- Keep TypeScript strict-compatible.
- Prefer explicit interfaces for request/response and domain entities.
- Align API models and endpoints with project docs when backend data is touched.
- Flag any contract uncertainty explicitly and avoid guessing server behavior.

3. Confirm rendering model.
- Preserve zoneless setup.
- Preserve hydration unless the task explicitly changes hydration behavior.
- If SSR behavior is touched, verify both client and server routing implications.

4. Confirm UI and template quality.
- Keep templates semantic and accessible (headings, labels, aria attributes where needed).
- Keep styling consistent with project conventions and responsive behavior.
- Avoid placeholder scaffolding in committed UI.

5. Confirm data flow and side effects.
- Keep components focused on presentation and orchestration.
- Centralize API access in services with typed responses.
- Handle loading, empty, and error states explicitly.

6. Confirm testing and safety.
- Update or add tests for behavior changes.
- In component tests for zoneless apps, include provideExperimentalZonelessChangeDetection().
- Avoid flaky assertions; prefer stable expectations based on behavior.

7. Confirm final validation.
- Run unit tests and relevant build checks.
- Re-check changed files for lint/type/template errors.
- Summarize what changed, why, and residual risks.

## Decision Points
- If the request is a one-file styling tweak, run a minimal subset: steps 1, 4, 7.
- If API models or endpoints change, prioritize steps 2, 5, 6, 7.
- If SSR or hydration is touched, prioritize steps 3 and 7 with explicit verification notes.

## Completion Criteria
- All applicable checklist items are satisfied or explicitly waived with reason.
- Tests and diagnostics pass for touched scope.
- The change summary includes assumptions and any follow-up work.
- If any API contract is ambiguous, capture it as an open question before merge.
