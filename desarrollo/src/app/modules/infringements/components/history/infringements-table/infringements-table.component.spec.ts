import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfringementsTableComponent } from './infringements-table.component';

describe('InfringementsTableComponent', () => {
  let component: InfringementsTableComponent;
  let fixture: ComponentFixture<InfringementsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfringementsTableComponent]
    });
    fixture = TestBed.createComponent(InfringementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
