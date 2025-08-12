import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAvailabilityComponent } from './table-availability.component';

describe('TableAvailabilityComponent', () => {
  let component: TableAvailabilityComponent;
  let fixture: ComponentFixture<TableAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableAvailabilityComponent]
    });
    fixture = TestBed.createComponent(TableAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
