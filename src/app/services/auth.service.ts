import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'; // Import the User model
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private usersData: User[] = [];
  private currentUser: User | null = null; // Store the currently logged-in user
  // Array to hold user data

  constructor(private http: HttpClient, private router: Router) {
    // Fetch user data from your JSON server or API when the service is instantiated
    this.fetchUserData();
  }

  // Fetch user data from your JSON server or API
  private fetchUserData(): void {
    this.http.get<User[]>('http://localhost:3000/users').subscribe((data) => {
      this.usersData = data;
    });
  }

  login(username: string, password: string): boolean {
    // Check if there's a user in the usersData array with the provided username and password
    const user = this.usersData.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.isAuthenticated = true;
      this.currentUser = user;
    } else {
      this.isAuthenticated = false;
      this.currentUser = null;
    }

    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  getCurrentUser(): User | null {
    return this.currentUser;
  }
  addUser(newUser: User) {
    // Assign a unique ID to the new user (replace with logic to generate unique IDs)
    newUser.id = this.usersData.length + 1;
    // Add the new user to the usersData array
    this.http.post('http://localhost:3000/users', newUser).subscribe((res) => {
      console.log('posted');
      alert('added user succesfully!');
      this.router.navigate(['/admin/user-list']);
    });
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  editUser(user: User): Observable<any> {
    return this.http.put(`http://localhost:3000/users/${user.id}`, user);
  }

  // Delete user
  deleteUser(user: User): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${user.id}`);
  }
}
