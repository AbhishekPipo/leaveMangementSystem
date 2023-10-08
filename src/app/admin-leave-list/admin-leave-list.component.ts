import { Component } from '@angular/core';
import { LeaveRequest } from '../models/leave-request.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveRequestService } from '../services/leave-request.service';

@Component({
  selector: 'app-admin-leave-list',
  templateUrl: './admin-leave-list.component.html',
  styleUrls: ['./admin-leave-list.component.css'],
})
export class AdminLeaveListComponent {
  leaveRequests: LeaveRequest[] = [];
  editingLeaveRequest: LeaveRequest | null = null;
  editForm: FormGroup;

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
          // Fetch updated leave requests after editing
          this.fetchLeaveRequests();
        });
    }
  }

  deleteLeaveRequest(leaveRequest: LeaveRequest): void {
    this.leaveRequestService.deleteLeaveRequest(leaveRequest.id);
    this.fetchLeaveRequests();
  }
  closeEditForm(): void {
    this.editingLeaveRequest = null;
    this.editForm.reset();
  }
}
