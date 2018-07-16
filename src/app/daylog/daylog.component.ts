import { Component, OnInit } from '@angular/core';

import { Day } from '../day';

@Component({
  selector: 'app-daylog',
  templateUrl: './daylog.component.html',
  styleUrls: ['./daylog.component.css']
})
export class DaylogComponent implements OnInit {

  daylogs: Day[];
  selectedDaylog: Day;

  constructor() { }

  ngOnInit() {
  }

}
