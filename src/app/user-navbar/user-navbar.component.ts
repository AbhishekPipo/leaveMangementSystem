import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent {
  constructor(private auth: AuthService, private router: Router) {}
  onLogoutClick() {
    this.auth.logout();
  }
  onNewLeaveClick() {
    this.router.navigate(['user/user-leave-list-add']);
  }
}
