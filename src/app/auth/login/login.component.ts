import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  signin(form: any) {
    this.router.navigate(['dashboard']);
  }
}
