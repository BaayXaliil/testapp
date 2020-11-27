import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const TableData: any;
declare const Main: any;
declare const Index: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testapp';
  currentUser;
  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
    Main.init();
    TableData.init();
    Index.init();
  }
  logout() {
    this.router.navigate(['/auth/login']);
  }

}
