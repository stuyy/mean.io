import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "BloggerIO";
  constructor()
  {
    
  }
  ngOnInit()
  {
    axios.get('http://localhost:3000/isloggedin', { withCredentials: true })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
}
