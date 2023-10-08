import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
// import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
// import { LeaveListComponent } from './leave-list/leave-list.component';
import { AdminComponent } from './admin/admin.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLeaveListComponent } from './user-leave-list/user-leave-list.component';
import { UserLeaveListAddComponent } from './user-leave-list-add/user-leave-list-add.component';
import { AdminLeaveListComponent } from './admin-leave-list/admin-leave-list.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayEditComponent } from './holiday-edit/holiday-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  // { path: 'holidays', component: HolidaysComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  // { path: 'leave-list', component: LeaveListComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin/users', component: UserAddComponent },
  { path: 'admin/user-list', component: UserListComponent },
  { path: 'leave-list', component: UserLeaveListComponent },
  { path: 'user/user-leave-list-add', component: UserLeaveListAddComponent },
  { path: 'admin/leave-request', component: LeaveRequestComponent },
  { path: 'admin/leave-list', component: AdminLeaveListComponent },
  { path: 'admin/holiday', component: HolidayComponent },
  { path: 'holiday/edit/:id', component: HolidayEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
