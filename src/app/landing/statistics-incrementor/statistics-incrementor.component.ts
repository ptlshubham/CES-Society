import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-incrementor',
  templateUrl: './statistics-incrementor.component.html',
  styleUrls: ['./statistics-incrementor.component.css']
})
export class StatisticsIncrementorComponent implements OnInit {
  projectCount: number = 0;
  projectCount1: number = 0;
  projectCount2: number = 0;
  projectCount3: number = 0;

  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if (this.projectCount == 284) {
      clearInterval(this.projectCountStop);
    }
  }, 60)
  projectCountStop1: any = setInterval(() => {
    this.projectCount1++;
    if (this.projectCount1 == 4523) {
      clearInterval(this.projectCountStop1);
    }
  }, 50)
  projectCountStop2: any = setInterval(() => {
    this.projectCount2++;
    if (this.projectCount2 == 120) {
      clearInterval(this.projectCountStop2);
    }
  }, 80)
  projectCountStop3: any = setInterval(() => {
    this.projectCount3++;
    if (this.projectCount3 == 100) {
      clearInterval(this.projectCountStop3);
    }
  }, 80)
  constructor() { }

  ngOnInit(): void {
  }

}
