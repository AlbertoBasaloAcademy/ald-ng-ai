import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./routes/home/home.page'),
  },
  {
    path: 'launches',
    loadComponent: () => import('./routes/launch-discovery/launch-discovery.page'),
  },
  {
    path: 'launches/:id',
    loadComponent: () => import('./routes/launch-discovery/launch-detail.page'),
  },
  {
    path: 'rockets/new',
    loadComponent: () => import('./routes/rocket-new/rocket-new.page'),
  },
  {
    path: 'rockets/:id',
    loadComponent: () => import('./routes/rocket-detail/rocket-detail.page'),
  },
];
