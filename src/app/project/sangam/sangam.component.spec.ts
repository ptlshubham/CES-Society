import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangamComponent } from './sangam.component';

describe('SangamComponent', () => {
  let component: SangamComponent;
  let fixture: ComponentFixture<SangamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SangamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SangamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
