// Import necessary modules
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveRequest } from '../models/leave-request.model';
import { LeaveRequestService } from '../services/leave-request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-leave-list-add',
  templateUrl: './user-leave-list-add.component.html',
  styleUrls: ['./user-leave-list-add.component.css'],
})
export class UserLeaveListAddComponent {
  leaveRequestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private leaveRequestService: LeaveRequestService,
    private http: HttpClient
  ) {
    // Initialize the form with FormBuilder
    this.leaveRequestForm = this.fb.group({
      // Define form controls with initial values and validators
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.leaveRequestForm.valid) {
      // Create a LeaveRequest object from the form values
      const newLeaveRequest: LeaveRequest = {
        id: 0, // Assign an appropriate ID or use a unique ID generation logic
        userId: 0, // Assign the ID of the user creating the leave request
        startDate: this.leaveRequestForm.get('startDate').value,
        endDate: this.leaveRequestForm.get('endDate').value,
        status: 'Pending', // You can set the default status here
        reason: this.leaveRequestForm.get('reason').value,
      };

      // Call the service to add the leave request
      this.leaveRequestService.addLeaveRequest(newLeaveRequest);
      // this.http.post('http://localhost:3000/leaveRequests',newLeaveRequest);
      // Clear the form after submission
      this.leaveRequestForm.reset();
    } else {
      // Handle form validation errors if needed
    }
  }
}
