import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthoritzationService {

  constructor(private http: HttpClient) {

  }

  public getArticles() {
    return this.http.get('http://localhost:3003/article/get').toPromise();
  }
  public authorizeUser() {
    return this.http.get('http://localhost:3003/isloggedin', { withCredentials: true, observe: 'response'}).toPromise();
  }
  public registerUser(data) {
    return this.http.post('http://localhost:3003/register', data, {
      withCredentials: true
    }).toPromise();
  }
  public logoutUser() {
    return this.http.get('http://localhost:3003/logout', { withCredentials: true }).toPromise();
  }
  public loginUser(body) {
    return this.http.post('http://localhost:3003/login', body, { withCredentials: true }).toPromise();
  }
}
