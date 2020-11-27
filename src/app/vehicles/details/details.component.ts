import { Component, OnInit } from '@angular/core';

declare const Main: any;
declare const TableData: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Main.init();
    TableData.init();
  }

}
