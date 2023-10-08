import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveListComponent } from './admin-leave-list.component';

describe('AdminLeaveListComponent', () => {
  let component: AdminLeaveListComponent;
  let fixture: ComponentFixture<AdminLeaveListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLeaveListComponent]
    });
    fixture = TestBed.createComponent(AdminLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
