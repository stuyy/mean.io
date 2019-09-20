import { Component, OnInit } from '@angular/core';
import { RegisterformComponent } from '../registerform/registerform.component';
import {  Article } from '../../models/Article';
import { Router } from '@angular/router';

import axios from 'axios';
import { AuthoritzationService } from 'src/app/services/authoritzation.service';

@Component({
  selector: 'app-guestpage',
  templateUrl: './guestpage.component.html',
  styleUrls: ['./guestpage.component.css'],
  providers: [AuthoritzationService]
})
export class GuestpageComponent implements OnInit {

  articles:  Array<any>;
  isLoggedIn: boolean;
  constructor(private router: Router, private authService: AuthoritzationService) {
    this.router = router;
  }
  ngOnInit() {

    this.authService.getArticles()
    .then((res : any) => this.articles = res)
    .catch(err => console.log(err))
    
    this.authService.authorizeUser()
    .then(res => {
      this.router.navigate(['/dashboard']);
      this.isLoggedIn = true;
    })
    .catch(err => this.isLoggedIn = false);
  }
}
