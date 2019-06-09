import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  username: string;
  password: string;
  errors: Array<string>;
  constructor(private router: Router) { 
    this.router = router;
  }

  ngOnInit() {

  }
  login($event)
  {
    this.errors = [];
    $event.preventDefault();
    if(this.password === undefined ||  this.username === undefined)
    {
      this.errors.push('Invalid Credentials');
    }
    else {
      console.log("Yo");
      axios('http://localhost:3000/login', {
      method: "post",
      data: { username: this.username, password: this.password },
      withCredentials: true
      }).then(res => {
        console.log(res);
        this.router.navigate(['/dashboard'])
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

}
