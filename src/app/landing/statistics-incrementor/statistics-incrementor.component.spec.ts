import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsIncrementorComponent } from './statistics-incrementor.component';

describe('StatisticsIncrementorComponent', () => {
  let component: StatisticsIncrementorComponent;
  let fixture: ComponentFixture<StatisticsIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsIncrementorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
