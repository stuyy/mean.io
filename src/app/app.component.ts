import { Component } from '@angular/core';

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
  changeName(name: string) {
    this.name = name;
  }
}
