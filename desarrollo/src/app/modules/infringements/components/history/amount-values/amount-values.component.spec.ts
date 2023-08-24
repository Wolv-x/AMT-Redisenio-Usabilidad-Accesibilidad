import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountValuesComponent } from './amount-values.component';

describe('AmountValuesComponent', () => {
  let component: AmountValuesComponent;
  let fixture: ComponentFixture<AmountValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmountValuesComponent]
    });
    fixture = TestBed.createComponent(AmountValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
