import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Work 2 Do';
  email: string;
  pwd: string;
  username: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd, this.username);
    console.log(this.email);
    console.log(this.pwd);
  }

}