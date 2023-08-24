import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHeaderTemplate } from './simple-header-template.component';

describe('SimpleHeaderTemplateComponent', () => {
  let component: SimpleHeaderTemplate;
  let fixture: ComponentFixture<SimpleHeaderTemplate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleHeaderTemplate]
    });
    fixture = TestBed.createComponent(SimpleHeaderTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
