import { Routes } from '@angular/router';


export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./routes/home/home.page')
	},
	{
		path: 'rockets/:id',
		loadComponent: () => import('./routes/rocket-detail/rocket-detail.page')
	}
];
