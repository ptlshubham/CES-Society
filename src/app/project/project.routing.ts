import { Routes } from '@angular/router';
import { SetuComponent } from './setu/setu.component';
import { SangamComponent } from './sangam/sangam.component';


export const ProjectRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'setu',
        component: SetuComponent
    },
    {
        path: 'sangam',
        component: SangamComponent
    }
    ],
    
}];
