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
  success: boolean;
  successMsg: string;
  constructor(private router: Router) { 
    this.router = router;
    this.errors = [];
    this.title =  '';
    this.success =  false;
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
    this.success = false;
    if(this.name.value.length < 100)
    {
      this.errors.push("Article needs to be at least 100 characters!");
      return;
    }
    if(this.title.length === 0)
    {
      this.errors.push("You need a title!");
      return;
    }
    else {
      axios.post('http://localhost:3000/article/publish', { data: this.name.value, title: this.title }, {withCredentials: true})
      .then(res => {
        this.success = true;
        this.successMsg = 'Successfully published your article!';
        this.title = '';
        this.name.reset();
      }).catch(err => console.log(err));
    }
  }
  close(err)
  {
    this.errors.splice(this.errors.indexOf(err),1);
  }
  closeSuccess()
  {
    this.success  = false;
    this.successMsg =  '' ;
  }
}
