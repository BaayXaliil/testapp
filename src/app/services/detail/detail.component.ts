import { Component, OnInit } from '@angular/core';

declare const Main: any;
declare const TableData: any;
declare const $: any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Main.init();
    TableData.init();
  }

}
