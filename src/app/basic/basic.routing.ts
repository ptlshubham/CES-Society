import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'history',
        component: HistoryComponent
    }
    ]
}];
