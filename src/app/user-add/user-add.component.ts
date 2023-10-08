import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Import the AuthService
import { User } from '../models/user.model'; // Import the User model
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      // Call the AuthService to add the new user
      this.authService.addUser(newUser);
    

      // Optionally, you can navigate to another route or perform other actions after adding the user.
    }
  }
}
