import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMessageComponent } from './section-message.component';

describe('SectionMessageComponent', () => {
  let component: SectionMessageComponent;
  let fixture: ComponentFixture<SectionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
