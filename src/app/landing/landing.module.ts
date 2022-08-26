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



@NgModule({
  declarations: [
    MainComponent,
    HomeSliderComponent,
    StatisticsIncrementorComponent
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
    StatisticsIncrementorComponent
  ],
})
export class LandingModule { }
