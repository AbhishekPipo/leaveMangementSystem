import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      if (this.username === 'admin') {
        console.log('admin');

        // Navigate to the admin route if the username is 'admin'
        this.router.navigate(['/admin']);
      } else {
        alert('user');
        // Navigate to the user route for non-admin users
        this.router.navigate(['/user']);
      }
    } else {
      alert('Invalid credentials'); // Display an error message
    }
  }
}
