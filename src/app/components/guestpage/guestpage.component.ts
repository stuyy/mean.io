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
    this.articles = [
      {
        id: 1,
        title: "Anson's first app!",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at urna tincidunt, vestibulum libero in, dictum sem. Pellentesque volutpat eget risus et imperdiet. Nulla sollicitudin accumsan nunc non sagittis. Aenean eget diam id quam semper porttitor. Sed maximus sapien nisl, eu consectetur lorem efficitur vitae. In sodales mattis ante non malesuada. Etiam non magna odio. Nam imperdiet porta lectus, nec pellentesque ipsum aliquet sit amet. Donec mollis semper nunc, eget pretium turpis vestibulum non. Nam mauris felis, interdum dignissim lacus feugiat, dictum tristique ante.',
        date: new Date()
      },
      {
        id: 2,
        title: "My first app!",
        text:  'Suspendisse vitae aliquet eros, sed egestas tortor. Aenean id fermentum erat. Nunc porttitor non augue hendrerit lacinia. Mauris at lectus sit amet purus mollis dignissim. Etiam sagittis elementum porttitor. Fusce vel leo sodales, luctus leo eget, porta enim. Vivamus convallis placerat porta. Duis consectetur odio at lectus dictum, ut elementum eros finibus. Nullam venenatis, magna ut auctor aliquet, quam enim sagittis lacus, eu iaculis sem nisi ut dolor. Nam fermentum consectetur lectus vel malesuada.',
        date: new Date()
      }
    ]
    axios.get('http://localhost:3000/isloggedin', {withCredentials: true})
    .then(res => {
      console.log("Yes.");
      this.router.navigate(['/dashboard'])
    }).catch(err =>  {
      console.log("Do nothing.");
    })
  }

}
