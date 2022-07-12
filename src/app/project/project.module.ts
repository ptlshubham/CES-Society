import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetuComponent } from './setu/setu.component';
import { RouterModule } from '@angular/router';
import { ProjectRoutes } from './project.routing';
import { SharedModule } from '../shared/shared.module';
import { SangamComponent } from './sangam/sangam.component';


@NgModule({
    declarations: [
      SetuComponent,
      SangamComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(ProjectRoutes)
    ]
  })
  export class ProjectModule { }
  