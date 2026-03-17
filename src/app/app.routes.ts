import { Routes } from '@angular/router';


export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./routes/home/home.page')
	}
];
