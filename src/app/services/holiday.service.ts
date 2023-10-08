import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Holiday } from '../models/holiday.model';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private holidaysUrl = 'http://localhost:3000/holidays'; // Replace with your JSON server URL

  constructor(private http: HttpClient) {}

  getAllHolidays(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(this.holidaysUrl);
  }

  getHolidayById(id: number): Observable<Holiday> {
    const url = `${this.holidaysUrl}/${id}`;
    return this.http.get<Holiday>(url);
  }

  editHoliday(updatedHoliday: Holiday): Observable<Holiday> {
    const url = `${this.holidaysUrl}/${updatedHoliday.id}`;
    return this.http.put<Holiday>(url, updatedHoliday);
  }
  deleteHoliday(id: number): Observable<void> {
    const url = `${this.holidaysUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
