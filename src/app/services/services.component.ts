import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const Main: any;
declare const Index: any;
declare const TableData: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    Index.init();
    Main.init();
    TableData.init();
  }

  detailService(serviceId: any) {
    this.router.navigate(['services', 'detail'])
  }

}
