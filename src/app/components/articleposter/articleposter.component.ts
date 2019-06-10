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
  title: string;
  errors: Array<any>;
  constructor(private router: Router) { 
    this.router = router;
    this.errors = [];
    this.title =  '';
  }
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
    this.errors = [];
    if(this.name.value.length < 150)
    {
      this.errors.push("Article needs to be at least 150 characters!");
    }
    if(this.title.length === 0)
    {
      this.errors.push("You need a title!");
    }
    else {
      axios.post('http://localhost:3000/article/publish', { data: this.name.value, title: this.title }, {withCredentials: true})
      .then(res => {
      console.log(res);
      }).catch(err => console.log(err));
    }
  }
  close(err)
  {
    this.errors.splice(this.errors.indexOf(err),1);
  }
}
