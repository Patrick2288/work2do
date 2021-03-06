import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  title: string ="Work 2 Do";

  isLoggedIn: boolean;
  constructor(private auth: AuthService, private myRoute: Router) { }

  userLoggedIn(): boolean {
    this.isLoggedIn = this.auth.isLoggedIn();
    return this.isLoggedIn
  }

  onLogout() {
    this.auth.doLogout();
    this.isLoggedIn = this.auth.isLoggedIn();
    this.myRoute.navigate(["login"]);
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}