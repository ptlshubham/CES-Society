import { Component, OnInit } from '@angular/core';
import { WebImageUpload } from 'src/app/core/model/web-image-upload';
import { HomePageService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  public imageUploader: WebImageUpload[] = [];
  public webImageUpload: WebImageUpload = new WebImageUpload;

  constructor(
    public homepageService: HomePageService
  ) { }

  ngOnInit(): void {
    this.getWebImage();
  }
  getWebImage() {
    this.webImageUpload.name = 'CES';

    this.homepageService.getWebImageList(this.webImageUpload).subscribe((data: any) => {
      this.imageUploader = data;
    })
  }
}
