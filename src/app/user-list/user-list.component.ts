import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Import FormBuilder and FormGroup
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  editingUser: User | null = null; // Keep track of the user being edited
  editForm: FormGroup; // Define the edit form

  constructor(private authService: AuthService, private fb: FormBuilder) {
    // Initialize the edit form using FormBuilder
    this.editForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    // Fetch the list of users using the getAllUsers method
    this.authService.getAllUsers().subscribe((data) => {
      this.users = data.filter((user) => user.username != 'admin');
    });
  }

  editUser(user: User): void {
    // Set the editingUser to the selected user
    this.editingUser = user;

    // Update the form values with the user's data
    this.editForm.setValue({
      username: user.username,
      password: user.password,
    });
  }

  saveUser(): void {
    if (this.editingUser) {
      // Get the updated user data from the form
      const updatedUser: User = {
        id: this.editingUser.id,
        username: this.editForm.get('username').value,
        password: this.editForm.get('password').value,
      };

      // Call authService.editUser(updatedUser) to save the changes
      this.authService.editUser(updatedUser).subscribe(() => {
        console.log('User updated successfully');

        // Update the local users array and reset the form
        this.users = this.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );

        this.editForm.reset(); // Reset the form
        this.editingUser = null; // Clear the editingUser
      });
    }
  }

  deleteUser(user: User): void {
    // Display a confirmation dialog
    const confirmation = confirm(
      `Are you sure you want to delete ${user.username}?`
    );
    if (confirmation) {
      // Call authService.deleteUser(user) to delete the user
      this.authService.deleteUser(user).subscribe(() => {
        console.log('User deleted successfully');
        // Remove the user from the local users array to update the UI
        this.users = this.users.filter((u) => u.id !== user.id);
      });
    }
  }
}
