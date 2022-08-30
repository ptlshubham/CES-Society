import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutes } from './landing.routing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { StatisticsIncrementorComponent } from './statistics-incrementor/statistics-incrementor.component';
import { AcademicCategoriesComponent } from './academic-categories/academic-categories.component';
import { SectionMessageComponent } from './section-message/section-message.component';
import { SectionCourseComponent } from './section-course/section-course.component';
import { CompetitionCertificateComponent } from './competition-certificate/competition-certificate.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeSliderComponent,
    StatisticsIncrementorComponent,
    AcademicCategoriesComponent,
    SectionMessageComponent,
    SectionCourseComponent,
    CompetitionCertificateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRoutes),
    SharedModule,
    NgbModule,
    CarouselModule
  ],
  exports:[
    MainComponent,
    HomeSliderComponent,
    StatisticsIncrementorComponent,
    AcademicCategoriesComponent,
    SectionMessageComponent,
    SectionCourseComponent,
    CompetitionCertificateComponent,
  ],
})
export class LandingModule { }
