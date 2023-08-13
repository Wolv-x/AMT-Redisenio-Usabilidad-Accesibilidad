import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFooterTemplate } from './nav-footer-template.component';

describe('NavFooterTemplateComponent', () => {
  let component: NavFooterTemplate;
  let fixture: ComponentFixture<NavFooterTemplate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavFooterTemplate]
    });
    fixture = TestBed.createComponent(NavFooterTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
