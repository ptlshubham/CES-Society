import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FundComponent } from './fund/fund.component';
import { HistoryComponent } from './history/history.component';
import { ManagementComponent } from './management/management.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'fund',
        component: FundComponent
    }
    ]
}];
