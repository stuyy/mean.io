import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from "@angular/router";
import { AuthoritzationService } from 'src/app/services/authoritzation.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})

export class RegisterformComponent implements OnInit {
  
  email: string;
  name: string;
  password: string;                       
  confirm: string;
  errors: Array<string>;
  statusCode: Number;
  alerts: Alert[];
  constructor(private router: Router, private authService: AuthoritzationService) { 
    this.email = '';
    this.router  = router;
    this.alerts = [];
  }

  ngOnInit() {
    this.authService.authorizeUser()
    .then(res => this.router.navigate(['/dashboard']))
    .catch(err => console.log(err));
  }
  register($event)
  {
    this.errors = [];
    $event.preventDefault();
    this.authService.registerUser({
      email: this.email,
      name: this.name,
      password: this.password,
      confirm: this.confirm
    }).then(res => {
      console.log("Hello?")
      this.router.navigate(['/dashboard'])
    })
    .catch(err => {
      let errs = err.error.errors;
      for(var err of errs) {
        this.alerts.push({ type: 'danger', message: err.msg})
      }
      console.log(this.alerts)
    });
  }
  dismissAlert(alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
