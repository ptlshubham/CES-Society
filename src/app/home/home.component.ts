import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  readMore=false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/1920/500`);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  projectCount:number=0;
  projectCountStop:any= setInterval(()=>{
    this.projectCount++;
    if(this.projectCount==284){
      clearInterval(this.projectCountStop);
    }
  },80)

  constructor(
    config: NgbCarouselConfig
  ) {
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
        this.readMore=false;
   }

  ngOnInit(): void {
  }
  moreOpen(){
    this.readMore=true;
  }
}
