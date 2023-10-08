import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Holida } from '../holiday.model';
import { Holiday } from '../models/holiday.model';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-holiday-edit',
  templateUrl: './holiday-edit.component.html',
  styleUrls: ['./holiday-edit.component.css'],
})
export class HolidayEditComponent implements OnInit {
  holiday: Holiday = { id: 0, name: '', date: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private holidayService: HolidayService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.holidayService.getHolidayById(id).subscribe((data) => {
      this.holiday = data;
    });
  }

  saveHoliday(): void {
    this.holidayService.editHoliday(this.holiday).subscribe(() => {
      this.router.navigate(['admin/holiday']);
    });
  }
}
