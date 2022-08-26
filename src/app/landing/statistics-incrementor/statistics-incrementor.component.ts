import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-incrementor',
  templateUrl: './statistics-incrementor.component.html',
  styleUrls: ['./statistics-incrementor.component.css']
})
export class StatisticsIncrementorComponent implements OnInit {
  projectCount: number = 0;
  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if (this.projectCount == 284) {
      clearInterval(this.projectCountStop);
    }
  }, 80)
  constructor() { }

  ngOnInit(): void {
  }

}
