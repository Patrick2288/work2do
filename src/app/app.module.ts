import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RouterModule, Routes} from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { WorkListComponent } from './work-list/work-list.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignupComponent } from './signup/signup.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';

library.add(faStar);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]},
   { path: 'work-list', component: WorkListComponent, canActivate: [AuthGuard]},
   { path: 'add-assignment', component: AddAssignmentComponent, canActivate: [AuthGuard]},
   { path: 'home', component: WorkListComponent, canActivate: [AuthGuard]},
   { path: 'login', component: LoginComponent},
   { path: 'signup', component: SignupComponent},
   { path: '**', redirectTo: 'login', canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkListComponent,
    LoginComponent,
    NavbarComponent,
    NotificationsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
