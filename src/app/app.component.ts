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
  publicKey: string = "BBIvvfJbER8lFSr7fF7sTkanFXRX5Xbdk0EMSqUr95wtrLjEu359qGpi78g-6SyBo-KxS7m-k_I3VS2BRXCIl-k"
  
  ngOnInit()
  {
  }
}
