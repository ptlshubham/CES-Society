import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
    { path: 'academic', loadChildren: () => import('./academic/academic.module').then(m => m.AcademicModule) },
    { path: 'glory', loadChildren: () => import('./glory/glory.module').then(m => m.GloryModule) },
    { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },

];
