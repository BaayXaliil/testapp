import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const TableData: any;
@Component({
  selector: 'app-client-vehicles',
  templateUrl: './client-vehicles.component.html',
  styleUrls: ['./client-vehicles.component.scss']
})
export class ClientVehiclesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    TableData.init();
  }

  vehicleDetails(vehiculeId: any) {
    this.router.navigate(['vehicles', 'details'])
  }
}
