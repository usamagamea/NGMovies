import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
jwtDecode;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  apiDomain = environment.apiDomain;

  constructor(private http: HttpClient, private route: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.saveCurrentUser();
    }
  }
  saveCurrentUser() {
    const token: any = this.getAuthToken();
    this.currentUser.next(jwtDecode(token));
  }

  login(data: any) {
    return this.http.post(`${this.apiDomain}/api/login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.apiDomain}/api/register`, data);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.currentUser.next(null);
    this.route.navigate(['home']);
  }
  getAuthToken() {
    return localStorage.getItem('userToken');
  }
}
