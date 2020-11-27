import { Component, OnInit } from '@angular/core';

declare const Main: any;
declare const Index: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Main.init();
    Index.init();
  }

}
