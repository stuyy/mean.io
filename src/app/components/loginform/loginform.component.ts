import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthoritzationService } from 'src/app/services/authoritzation.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  providers: [AuthoritzationService]
})
export class LoginformComponent implements OnInit {

  username: string;
  password: string;
  errors: Array<string>;
  constructor(private router: Router, private authService: AuthoritzationService) { 
    this.router = router;
  }

  ngOnInit() {
    this.authService.authorizeUser()
    .then(res => this.router.navigate(['/dashboard']))
    .catch(err => this.router.navigate(['/login']));
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
      this.authService.loginUser({
        username: this.username,
        password: this.password
      }).then(res => this.router.navigate(['/dashboard']))
      .catch(err => this.router.navigate(['/guest']))
    }
  }

}
