import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./routes/home/home.page'),
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
