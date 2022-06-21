import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }



];
