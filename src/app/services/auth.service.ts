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
  token: any = localStorage.getItem('userToken');

  constructor(private http: HttpClient, private route: Router) {
    if (this.token !== null) {
      this.saveCurrentUser();
    }
  }
  saveCurrentUser() {
    this.currentUser.next(jwtDecode(this.token));
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
}
