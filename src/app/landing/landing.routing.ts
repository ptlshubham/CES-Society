import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
export const LandingRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'main',
        component: MainComponent
    },
    // {
    //     path: 'others',
    //     component: OthersComponent
    // },
    // {
    //     path: 'hostels',
    //     component: HostelsComponent
    // },
    // {
    //     path: 'colleges',
    //     component: CollegesComponent
    // }
    ],
    
}];
