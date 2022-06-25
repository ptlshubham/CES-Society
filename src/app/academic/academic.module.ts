import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school/school.component';
import { RouterModule } from '@angular/router';
import { AcademicRoutes } from './academic.routing';
import { SharedModule } from '../shared/shared.module';
import { CollegesComponent } from './colleges/colleges.component';
import { OthersComponent } from './others/others.component';
import { HostelsComponent } from './hostels/hostels.component';



@NgModule({
  declarations: [
    SchoolComponent,
    CollegesComponent,
    OthersComponent,
    HostelsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AcademicRoutes)
  ]
})
export class AcademicModule { }
