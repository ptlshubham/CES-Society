import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMessageComponent } from './news-message.component';

describe('NewsMessageComponent', () => {
  let component: NewsMessageComponent;
  let fixture: ComponentFixture<NewsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
