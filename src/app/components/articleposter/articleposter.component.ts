import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthoritzationService } from 'src/app/services/authoritzation.service';

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

  constructor(private router: Router, private authService: AuthoritzationService) { 
    this.router = router;
    this.errors = [];
    this.title =  '';
    this.success =  false;
  }

  ngOnInit() {
    this.authService.authorizeUser()
    .then(res => { console.log("Hello?");})
    .catch(err => this.router.navigate(['/guest']))
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
