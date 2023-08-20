import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfringementFormComponent } from './infringement-form.component';

describe('InfringementFormComponent', () => {
  let component: InfringementFormComponent;
  let fixture: ComponentFixture<InfringementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfringementFormComponent]
    });
    fixture = TestBed.createComponent(InfringementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
