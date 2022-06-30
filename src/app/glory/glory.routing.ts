import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { OldComponent } from './old/old.component';


export const GloryRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'old',
        component: OldComponent
    },
    
    ],
    
}];
