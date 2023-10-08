import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from '../models/leave-request.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveRequestService } from '../services/leave-request.service';

@Component({
  selector: 'app-user-leave-list',
  templateUrl: './user-leave-list.component.html',
  styleUrls: ['./user-leave-list.component.css'],
})
export class UserLeaveListComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  editingLeaveRequest: LeaveRequest | null = null;
  editForm: FormGroup;
  http: any;

  constructor(private leaveRequestService: LeaveRequestService) {
    this.editForm = new FormGroup({
      id: new FormControl(null),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    // Fetch leave requests from the service when the component is initialized
    this.fetchLeaveRequests();
  }

  fetchLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().subscribe((requests) => {
      this.leaveRequests = requests;
    });
  }

  editLeaveRequest(leaveRequest: LeaveRequest): void {
    this.editingLeaveRequest = leaveRequest;
    this.editForm.setValue({
      id: leaveRequest.id,
      startDate: leaveRequest.startDate,
      endDate: leaveRequest.endDate,
      status: leaveRequest.status,
      reason: leaveRequest.reason,
    });
  }

  saveLeaveRequest(): void {
    if (this.editingLeaveRequest) {
      const updatedLeaveRequest = this.editForm.value as LeaveRequest;
      this.leaveRequestService
        .editLeaveRequest(updatedLeaveRequest)
        .subscribe(() => {
          this.editingLeaveRequest = null;

          this.editForm.reset();
          alert('Updated Leave Request Successfully!');
          // Fetch updated leave requests after editing

          this.fetchLeaveRequests();
        });
    }
  }

  // deleteLeaveRequest(leaveRequest: LeaveRequest): void {
  //   alert(leaveRequest.id);
  //   this.leaveRequestService.deleteLeaveRequest(leaveRequest.id);
  //   this.fetchLeaveRequests();
  // }

  deleteLeaveRequest(leaveRequest: LeaveRequest): void {
    // Filter out the leave request to be deleted by its ID
    this.leaveRequests = this.leaveRequests.filter(
      (request) => request.id !== leaveRequest.id
    );

    // Now, send the delete request to the server
    this.leaveRequestService.deleteLeaveRequest(leaveRequest.id);
  }

  //   deleteLeaveRequest(leaveRequest: LeaveRequest): void {
  //   // Filter out the leave request to be deleted by its ID
  //   this.leaveRequests = this.leaveRequests.filter(
  //     (request) => request.id !== leaveRequest.id
  //   );

  //   // Now, send the delete request to the server
  //   this.leaveRequestService.deleteLeaveRequest(leaveRequest.id).subscribe(() => {
  //     // After successful deletion on the server, update the server and db.json
  //     // by sending the remaining leave requests
  //     this.updateLeaveRequestsOnServer(this.leaveRequests);
  //   });
  // }

  private updateLeaveRequestsOnServer(updatedRequests: LeaveRequest[]): void {
    this.leaveRequestService
      .updateLeaveRequests(updatedRequests)
      .subscribe(() => {
        console.log('Remaining leave requests updated on the server');
      });
  }

  closeEditForm(): void {
    this.editingLeaveRequest = null;
    this.editForm.reset();
  }
}
