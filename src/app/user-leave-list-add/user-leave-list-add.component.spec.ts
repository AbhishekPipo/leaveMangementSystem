import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeaveListAddComponent } from './user-leave-list-add.component';

describe('UserLeaveListAddComponent', () => {
  let component: UserLeaveListAddComponent;
  let fixture: ComponentFixture<UserLeaveListAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLeaveListAddComponent]
    });
    fixture = TestBed.createComponent(UserLeaveListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
