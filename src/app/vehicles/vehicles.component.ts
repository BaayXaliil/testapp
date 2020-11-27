import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const Index: any;
declare const TableData: any;
declare const Main: any;

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    Index.init();
    Main.init();
    TableData.init();
  }

  vehicleDetails(vehiculeId: any) {
    this.router.navigate(['vehicles', 'details'])
  }

}
