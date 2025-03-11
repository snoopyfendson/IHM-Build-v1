import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVmDialogComponent } from './add-vm-dialog.component';

describe('AddVmDialogComponent', () => {
  let component: AddVmDialogComponent;
  let fixture: ComponentFixture<AddVmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
