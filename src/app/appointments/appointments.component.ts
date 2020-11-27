import { Component, OnInit } from '@angular/core';

declare const Main: any;
declare const Calendar: any;

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Main.init();
    Calendar.init();
  }

}
