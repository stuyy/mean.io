import { Component, OnInit } from '@angular/core';
import {  Article } from '../../models/Article';
import { Router }  from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles: Article[];
  constructor(private router: Router) { 
    this.router  = router;
  }

  ngOnInit() {

    // Need to fetch articles from the database.
    axios.get('http://localhost:3000/article/get')
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

    
    axios.get('http://localhost:3000/isloggedin', { withCredentials: true})
    .then(res  => {
      console.log("User is authenticated.");
    })
    .catch(err => {
      console.log("User is not authenticated.");
      this.router.navigate(['/guest']);
    });
  }
}
