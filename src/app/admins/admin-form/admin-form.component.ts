import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export class AdminFormComponent implements OnInit {

  createResult: { message: string; status: string };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(form: any) {

  }
}
