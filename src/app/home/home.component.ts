import { Component, OnInit } from '@angular/core';

declare const Index: any;
declare const TableData: any;
declare const Main: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Index.init();
    Main.init();
    TableData.init();
  }

}
