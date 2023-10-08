import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../models/leave-request.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private leaveRequestsUrl = 'http://localhost:3000/leaveRequests'; // Replace with your JSON server URL

  constructor(private http: HttpClient,private router : Router) {}
  // Inside LeaveRequestService

// Update the leave requests on the server
// updateLeaveRequests(updatedRequests: LeaveRequest[]): Observable<void> {
//   return this.http.put<void>(this.leaveRequestsUrl, updatedRequests);
// }


// Inside LeaveRequestService

// Update the leave requests on the server
updateLeaveRequests(updatedRequests: LeaveRequest[]): Observable<void> {
  return this.http.put<void>(this.leaveRequestsUrl, updatedRequests);
}



  // Fetch all leave requests
  getLeaveRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.leaveRequestsUrl);
  }

  // Add a new leave request
  addLeaveRequest(newLeaveRequest: LeaveRequest): void {
    console.log('added');
    this.http
      .post<LeaveRequest>(this.leaveRequestsUrl, newLeaveRequest)
      .subscribe((res) => {
        console.log(res);
      });
      console.log('submitted');
      alert('successfully added leave request');
      this.router.navigate(['leave-list'])
  }

  // Edit a leave request
  editLeaveRequest(
    updatedLeaveRequest: LeaveRequest
  ): Observable<LeaveRequest> {
    const url = `${this.leaveRequestsUrl}/${updatedLeaveRequest.id}`;
    return this.http.put<LeaveRequest>(url, updatedLeaveRequest);
  }

  // Delete a leave request
  // deleteLeaveRequest(leaveRequestId: number): void {
  //   const url = `${this.leaveRequestsUrl}/${leaveRequestId}`;
  //   alert(url)
  //   this.http.delete<void>(url).subscribe((res) => {
  //     console.log('deleted successfully!');
  //     alert('deleted successfully!')
  //   });
  // }


  deleteLeaveRequest(leaveRequestId: number): Observable<void> {
    const url = `${this.leaveRequestsUrl}/${leaveRequestId}`;
    alert('Deleted Leave Request Successfully!')
    return this.http.delete<void>(url);
  }
  approveLeaveRequest(leaveRequestId: number): Observable<LeaveRequest> {
    const url = `${this.leaveRequestsUrl}/${leaveRequestId}`;
    const updatedStatus = { status: 'Approved' };

    return this.http.patch<LeaveRequest>(url, updatedStatus);
  }

  // Reject a leave request
  rejectLeaveRequest(leaveRequestId: number): Observable<LeaveRequest> {
    const url = `${this.leaveRequestsUrl}/${leaveRequestId}`;
    const updatedStatus = { status: 'Rejected' };

    return this.http.patch<LeaveRequest>(url, updatedStatus);
  }

}
