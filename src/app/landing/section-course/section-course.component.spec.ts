import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCourseComponent } from './section-course.component';

describe('SectionCourseComponent', () => {
  let component: SectionCourseComponent;
  let fixture: ComponentFixture<SectionCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
