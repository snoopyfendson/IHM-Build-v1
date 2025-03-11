import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMComponent } from './vm.component';

describe('VMComponent', () => {
  let component: VMComponent;
  let fixture: ComponentFixture<VMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
