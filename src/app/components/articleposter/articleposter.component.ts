import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-articleposter',
  templateUrl: './articleposter.component.html',
  styleUrls: ['./articleposter.component.css']
})

export class ArticleposterComponent implements OnInit {

  name =  new FormControl('');

  constructor(private router: Router) { }

  ngOnInit() {
    axios.get('http://localhost:3000/isloggedin', { withCredentials: true})
    .then(res  => {
      console.log("User is authenticated.");
    })
    .catch(err => {
      console.log("User is not authenticated.");
      this.router.navigate(['/login']);
    });
  }
  saveArticle()
  {
    axios.post('http://localhost:3000/savearticle', {withCredentials: true})
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }
}
