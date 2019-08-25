import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  form;
  title = 'Work 2 Do';

  constructor(private fb: FormBuilder, private myRoute: Router, private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  login() {
    this.auth.doLogin(this.form.value)
    .then(res => {
      this.myRoute.navigate(['work-list']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
  facebookLogin() {
  this.auth.doFacebookLogin()
  .then(res => { 
  console.log("res: "+res);
  this.myRoute.navigate(['work-list']);
  }, err => {
  console.log(err);
  this.errorMessage = err.message;
  })
} 
}