import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationCardComponent } from './identification-card.component';

describe('IdentificationCardComponent', () => {
  let component: IdentificationCardComponent;
  let fixture: ComponentFixture<IdentificationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentificationCardComponent]
    });
    fixture = TestBed.createComponent(IdentificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
