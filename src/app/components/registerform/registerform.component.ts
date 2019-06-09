import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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

  constructor() { 
    this.email = '';
  }

  ngOnInit() {

  }
  register($event)
  {
    this.errors = [];
    $event.preventDefault();
    axios("http://localhost:3000/register", {
      method: "post",
      data: { email: this.email, name: this.name, password: this.password, confirm: this.confirm },
      withCredentials: true
    }).then(res => console.log(res))
    .catch(err  => {
      err.response.data.errors.forEach(element => {
        this.errors.push(element.msg)
      });
    });
  }
}
