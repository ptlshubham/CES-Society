import { Routes } from '@angular/router';
import { CollegesComponent } from './colleges/colleges.component';
import { HostelsComponent } from './hostels/hostels.component';
import { OthersComponent } from './others/others.component';
import { SchoolComponent } from './school/school.component';


export const AcademicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'school',
        component: SchoolComponent
    },
    {
        path: 'others',
        component: OthersComponent
    },
    {
        path: 'hostels',
        component: HostelsComponent
    },
    {
        path: 'colleges',
        component: CollegesComponent
    }
    ],
    
}];
