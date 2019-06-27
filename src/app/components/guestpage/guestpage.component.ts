import { Component, OnInit } from '@angular/core';
import { RegisterformComponent } from '../registerform/registerform.component';
import {  Article } from '../../models/Article';
import { Router } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-guestpage',
  templateUrl: './guestpage.component.html',
  styleUrls: ['./guestpage.component.css']
})
export class GuestpageComponent implements OnInit {

  articles:  Array<any>;
  isLoggedIn: boolean;
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {

    axios.get('http://142.93.2.238:3000/article/get')
    .then(res => {
      console.log(res);
      this.articles = res.data;
    }).catch(err => console.log(err));
    
    axios.get('http://142.93.2.238:3000/isloggedin', {withCredentials: true})
    .then(res => {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard'])
    }).catch(err =>  {
      this.isLoggedIn = false;
    })
  }
}
