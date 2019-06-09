import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GuestpageComponent } from './components/guestpage/guestpage.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {
    path: 'guest', component: GuestpageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterformComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    GuestpageComponent,
    RegisterformComponent,
    LoginformComponent,
    
    
  ],
  imports: [
    NgbAlertModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * ENtry point file
 */