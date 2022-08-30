import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCertificateComponent } from './competition-certificate.component';

describe('CompetitionCertificateComponent', () => {
  let component: CompetitionCertificateComponent;
  let fixture: ComponentFixture<CompetitionCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
