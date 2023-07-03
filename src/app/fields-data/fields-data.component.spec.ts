import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsDataComponent } from './fields-data.component';

describe('FieldsDataComponent', () => {
  let component: FieldsDataComponent;
  let fixture: ComponentFixture<FieldsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
