import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthoritzationService {

  constructor(private http: HttpClient) {

  }
  public authorizeUser() {
    return this.http.get('http://localhost:3000/isloggedin', {
      withCredentials: true
    }).toPromise();
  }
  public registerUser(data) {
    return this.http.post('http://localhost:3000/register', data, {
      withCredentials: true
    }).toPromise();
  }
}
