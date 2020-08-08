import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as admin from 'firebase-admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private loginFormErrors: any;
  public userName;
  public loading = false;
  
  constructor(
    private formBuilder: FormBuilder) {
      this.loginFormErrors = { userName: {} };
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
    });
  }

}
