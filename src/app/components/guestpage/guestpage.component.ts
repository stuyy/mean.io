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
  
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {

    axios.get('http://localhost:3000/article/get')
    .then(res => {
      console.log(res);
      this.articles = res.data;
    }).catch(err => console.log(err));
    
    axios.get('http://localhost:3000/isloggedin', {withCredentials: true})
    .then(res => {
      console.log("Yes.");
      this.router.navigate(['/dashboard'])
    }).catch(err =>  {
      console.log("Do nothing.");
    })
  }
}
