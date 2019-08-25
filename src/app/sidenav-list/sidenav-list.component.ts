import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

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
  // public onToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  // }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}