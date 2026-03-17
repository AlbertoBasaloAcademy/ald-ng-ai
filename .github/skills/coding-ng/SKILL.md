---
name:  coding-ng
description: Best practices and conventions for Angular development. To be used when working on Angular projects to ensure code quality and maintainability.
---

# Ng Conventions

- Use the CLI to generate components, services, and other Angular artifacts to ensure consistent file structure and naming conventions.
- Follow the Angular Style Guide for naming conventions, such as using camelCase for variables and functions, and PascalCase for classes and components.

## Angular Configuration

Set the this defaults for CLI generation in `angular.json`:

```json
"schematics": {
  "@schematics/angular:component": {
    "changeDetection": "OnPush",
  }
}
```


## Services

- Services are used for **business logic, data management, and communication** with APIs.
- Provided in root by decorator `@Injectable({ providedIn: 'root' })`.
- Generate services using the CLI: `ng g s folder/service-name`

### State Management Services

- Manage asynchronous data with **signals** keeping _loading_, _error_, _resolved_ states.
- Exposes state to components through **signals**.
- Exposes **command methods** to update state and perform actions.
- Used by components, uses repositories to handle data fetching and transformations.

### Repository Services

- Handle **communication with APIs** and data sources.
- Encapsulate `HTTP` calls and data transformations.
- Leverages `interceptors` for cross-cutting concerns like:
  - authentication, error handling, data caching, and logging.


## HTTP communication

- Configure http at `app.config.ts` file with:
  - `provideHttpClient(withFetch(), withInterceptors([])),` function.

- Use `HttpClient` for making HTTP requests.

```ts
class UserRepository {
  // Inject HttpClient
  #httpClient = inject(HttpClient);
  
  // Fetch user data
  getUser$(id: string): Observable<User> {
    return this.#httpClient.get<User>(`/api/users/${id}`);
  }

  // Create or update user data
  saveUser$(user: User): Observable<User> {
    if (user.id) {
      return this.#httpClient.put<User>(`/api/users/${user.id}`, user);
    } else {
      return this.#httpClient.post<User>('/api/users', user);
    }
  } 
}
```

### Resources to interop with signals in services

```ts
class UserService {
  #repository = inject(UserRepository);
  
  #userResource = rxResource<User, {id: string}>({
    request: () => ({id: this.userId()}),
    loader: ({request}) => this.#repository.getUser$(request.id),
  });

  userId = signal('');
  user = this.#userResource.value;
  error = this.#userResource.error;
  loading = this.#userResource.isLoading;

  saveUser(user: User) {
    this.#repository.saveUser$(user).subscribe({
      next: (savedUser) => this.userId.set(savedUser.id),
      error: (err) => throw Error(err)
    });
  }
}
```
