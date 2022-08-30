import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCategoriesComponent } from './academic-categories.component';

describe('AcademicCategoriesComponent', () => {
  let component: AcademicCategoriesComponent;
  let fixture: ComponentFixture<AcademicCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
