---
name: components-ng
description: Components with Angular. Use whe generating any component, page, or presentational component.
---
## Components

- Componentes are **standalone**, no modules are needed.
- On push **change detection** is set by default for better performance.
- Generate components using the CLI: `ng g c folder/component-name`
- Do not make direct calls to APIs in components, use services instead.

### Syntax

- Use `inject()` instead of constructor **injection**.
- Use `input()` and `output()` **signals** for component communication.
- Use `signal()` and `computed()` for **state management**.
- Use `effects()` for exceptional handling of **side effects** in components.

### Templates

- Use `@if`, `@else`, `@switch` for conditional rendering.
- Use `@for` with `track item.id` for iterating over collections.
- Prefer auto-closing tags for Angular components with no projected content (e.g., `<app-header />`, `<app-user-form />`).
- Use `[attribute]` for computed attributes with dynamic values.
- No hardcoded strings in templates, use signals from component class.
- Avoid pipes and complex expressions in templates, use computed signals.

### Types

### Routed 

- Suffixed with `Page` type (e.g., `UserPage`). Ex: `ng g c routes/user --type=page`
- Export the class as `default` for simpler imports at routes.
- Receive route parameters via signals with `input.required<Type>()`.
- **Injected** with services to manage data and business logic.
- No raw HTML in their templates, use presentational components to encapsulate UI logic.

### Presentational

- **Focused on UI** and presentation, with minimal logic.
- No injected services, receive data and emit events through **input and output signals**.

### Shared Reusable

- Presentational components placed in a `shared` folder, **reusable** across the application.
- Examples: `Button`, `Card`, `List`, `Table`, `Form`, etc.

### Core 

- Presentational components placed in a `core` folder, used **only once by the app** component
- Examples: `Header`, `Footer`, `Navbar`, `Sidebar`, `Dialog`, `Modal`, `Toast`, etc.

### Examples

-  Presentational component example: ./presentational.component.ts
