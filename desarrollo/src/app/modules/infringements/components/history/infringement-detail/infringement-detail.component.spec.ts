import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfringementDetailComponent } from './infringement-detail.component';

describe('InfringementDetailComponent', () => {
  let component: InfringementDetailComponent;
  let fixture: ComponentFixture<InfringementDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfringementDetailComponent]
    });
    fixture = TestBed.createComponent(InfringementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
