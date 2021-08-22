import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../utils/routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn: boolean = window.localStorage.getItem('jwt') != null;

  constructor(private http: HttpClient) {}

  public login(loginCredentials) {
    return this.http.post(Routes.BASE + Routes.LOGIN, loginCredentials, { responseType: 'text' });    
  }

  public logout() {
    this.setLoggedIn(false);
    window.localStorage.removeItem('jwt');
  }

  public get isLoggedIn() {
    return this._isLoggedIn;
  }

  public setLoggedIn(loggedIn: boolean) {
    this._isLoggedIn = loggedIn;
  }

}
