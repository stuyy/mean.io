import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "MEAN.IO";
  subtitle: string = "More Excellent Articles Now";
  constructor()
  {
    
  }
  ngOnInit()
  {
  }
}
