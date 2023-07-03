import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogboxComponent } from './edit-dialogbox.component';

describe('EditDialogboxComponent', () => {
  let component: EditDialogboxComponent;
  let fixture: ComponentFixture<EditDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
