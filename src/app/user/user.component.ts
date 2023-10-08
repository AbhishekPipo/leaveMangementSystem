import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  currentlyLoggedInUser: User | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentlyLoggedInUser = this.authService.getCurrentUser();
  }
}
