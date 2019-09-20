import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from "@angular/router";
import { AuthoritzationService } from 'src/app/services/authoritzation.service';

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
  constructor(private router: Router, private authService: AuthoritzationService) { 
    this.email = '';
    this.router  = router;
    
  }

  ngOnInit() {
    this.authService.authorizeUser()
    .then(res => this.router.navigate(['/dashboard']))
    .catch(err => console.log(err));
  }
  register($event)
  {
  //   this.errors = [];
  //   $event.preventDefault();
  //   axios("http://localhost:3000/register", {
  //     method: "post",
  //     data: { email: this.email, name: this.name, password: this.password, confirm: this.confirm },
  //     withCredentials: true
  //   }).then(res => {
  //     if(res.status === 201)
  //     {
  //       this.router.navigate(['/login']);
  //     }
  //   })
  //   .catch(err  => {
  //     err.response.data.errors.forEach(element => {
  //       this.errors.push(element.msg)
  //     });
  //   });
  // }
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
      err.error.errors.forEach(el => this.errors.push(el.msg))
    });
  }
}
