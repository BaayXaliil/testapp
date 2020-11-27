import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const TableData: any;
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    TableData.init();
  }

  vehicleClient(vehicle: string) {
    this.router.navigate(['vehicles', 'client', vehicle])
  }
}
