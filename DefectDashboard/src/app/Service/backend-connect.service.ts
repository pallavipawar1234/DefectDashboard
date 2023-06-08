import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendConnectService {
  constructor(private http: HttpClient) {}
  // BaseUrl: any = 'http://127.0.0.1:8000';
  BaseUrl: any = 'https://jsonplaceholder.typicode.com/users';
  // + '/Create_Project'
  getUserData() {
    return this.http.get(this.BaseUrl);
  }
}
