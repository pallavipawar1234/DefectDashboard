import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class BackendConnectService {
  endpoint_url: string = 'http://127.0.0.1:8000/';
  // endpoint_url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient, private route: Router) {}
  isLoggedIn = new BehaviorSubject(false);

  SignIn = 'Guest';

  login(username, password) {
    if (username == 'sachin' && password == 'Pass@123') {
      console.log('Auth login page');
      return true;
    }
    console.log('auth login page else part');
    return false;
  }

  getUserData() {
    return this.http.get(this.endpoint_url + 'Create_Project');
  }
}
