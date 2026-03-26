import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'launches',
    renderMode: RenderMode.Server,
  },
  {
    path: 'rockets/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'launches/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
