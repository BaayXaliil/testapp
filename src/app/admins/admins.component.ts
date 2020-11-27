import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $;
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  admins: any[] = [];
  admin: any = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  createResult: { message: string; status: string };
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  editAdmin(adminToUpdate: any) {
    this.admin = adminToUpdate;
  }

  onUpdateForm(form: any) {
    this.ngOnInit();
  }

  onRemoveAdmin() {

  }
}
