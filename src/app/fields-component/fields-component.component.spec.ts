import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsComponentComponent } from './fields-component.component';

describe('FieldsComponentComponent', () => {
  let component: FieldsComponentComponent;
  let fixture: ComponentFixture<FieldsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
