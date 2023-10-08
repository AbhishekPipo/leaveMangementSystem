// leave-request.component.ts

import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../services/leave-request.service';
import { LeaveRequest } from '../models/leave-request.model';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
})
export class LeaveRequestComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    // Fetch leave requests when the component is initialized
    this.leaveRequestService.getLeaveRequests().subscribe((data) => {
      this.leaveRequests = data;
    });
  }

  approveLeaveRequest(leaveRequest: LeaveRequest): void {
    this.leaveRequestService
      .approveLeaveRequest(leaveRequest.id)
      .subscribe((updatedLeaveRequest) => {
        // Update the status in the local leaveRequests list
        const index = this.leaveRequests.findIndex(
          (lr) => lr.id === updatedLeaveRequest.id
        );
        if (index !== -1) {
          this.leaveRequests[index] = updatedLeaveRequest;
        }
      });
  }

  rejectLeaveRequest(leaveRequest: LeaveRequest): void {
    this.leaveRequestService
      .rejectLeaveRequest(leaveRequest.id)
      .subscribe((updatedLeaveRequest) => {
        // Update the status in the local leaveRequests list
        const index = this.leaveRequests.findIndex(
          (lr) => lr.id === updatedLeaveRequest.id
        );
        if (index !== -1) {
          this.leaveRequests[index] = updatedLeaveRequest;
        }
      });
  }
}
