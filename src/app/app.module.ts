import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GuestpageComponent } from './components/guestpage/guestpage.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleposterComponent } from './components/articleposter/articleposter.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './components/article/article.component';
import { HttpClientModule } from '@angular/common/http';

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
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'postarticle', component: ArticleposterComponent
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
    ArticleposterComponent,
    ArticleComponent
  ],
  imports: [
    NgbAlertModule,
    FormsModule,
    BrowserModule,
    EditorModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes, {useHash: true}
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

