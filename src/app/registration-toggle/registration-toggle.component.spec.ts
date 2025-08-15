import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationToggleComponent } from './registration-toggle.component';

describe('RegistrationToggleComponent', () => {
  let component: RegistrationToggleComponent;
  let fixture: ComponentFixture<RegistrationToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationToggleComponent]
    });
    fixture = TestBed.createComponent(RegistrationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
