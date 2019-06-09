import { Component, OnInit } from '@angular/core';
import {  Article } from '../../models/Article';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles: Article[];
  constructor() { 

  }

  ngOnInit() {
    this.articles = [
      {
        id: 1,
        title: "Anson's first app!",
        date: new Date()
      },
      {
        id: 2,
        title: "My first app!",
        date: new Date()
      }
    ]
  }
}
