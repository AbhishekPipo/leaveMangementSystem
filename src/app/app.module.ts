// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component';
// // import { HolidaysComponent } from './holidays/holidays.component';
// import { LeaveRequestComponent } from './leave-request/leave-request.component';
// // import { LeaveListComponent } from './leave-list/leave-list.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AdminComponent } from './admin/admin.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { FooterComponent } from './footer/footer.component';
// import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
// import { UserNavbarComponent } from './user-navbar/user-navbar.component';
// import { HttpClientModule } from '@angular/common/http';
// import { UserAddComponent } from './user-add/user-add.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserLeaveListComponent } from './user-leave-list/user-leave-list.component';
// import { UserLeaveListAddComponent } from './user-leave-list-add/user-leave-list-add.component';
// import { AdminLeaveListComponent } from './admin-leave-list/admin-leave-list.component';
// import { HolidayComponent } from './holiday/holiday.component';
// import { HolidayEditComponent } from './holiday-edit/holiday-edit.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     UserComponent,
//     // HolidaysComponent,
//     LeaveRequestComponent,
//     // LeaveListComponent,
//     AdminComponent,
//     NavbarComponent,
//     FooterComponent,
//     AdminNavbarComponent,
//     UserNavbarComponent,
//     UserAddComponent,
//     UserListComponent,
//     UserLeaveListComponent,
//     UserLeaveListAddComponent,
//     AdminLeaveListComponent,
//     HolidayComponent,
//     HolidayEditComponent,
//     // UserLeaveListComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule,
//     ReactiveFormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLeaveListComponent } from './user-leave-list/user-leave-list.component';
import { UserLeaveListAddComponent } from './user-leave-list-add/user-leave-list-add.component';
import { AdminLeaveListComponent } from './admin-leave-list/admin-leave-list.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayEditComponent } from './holiday-edit/holiday-edit.component';

// Import the Font Awesome library and icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add Font Awesome icons to the library
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    LeaveRequestComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    UserAddComponent,
    UserListComponent,
    UserLeaveListComponent,
    UserLeaveListAddComponent,
    AdminLeaveListComponent,
    HolidayComponent,
    HolidayEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule, // Add FontAwesomeModule to your imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
