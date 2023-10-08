import { Component, OnInit } from '@angular/core';
import { Holiday } from '../models/holiday.model';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],
})
export class HolidayComponent implements OnInit {
  holidays: Holiday[] = [];

  constructor(private holidayService: HolidayService) {}

  ngOnInit(): void {
    this.holidayService.getAllHolidays().subscribe((data) => {
      this.holidays = data;
    });
  }
  deleteHoliday(id: number): void {
    this.holidayService.deleteHoliday(id).subscribe(() => {
      // After successfully deleting the holiday, reload the holidays list
      this.holidayService.getAllHolidays().subscribe((res) => {
        this.holidays = res;
      });
    });
  }
}
