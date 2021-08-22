import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../utils/routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public login(userData) {
    return this.http.post(Routes.BASE + Routes.LOGIN, userData, { responseType: 'text' });    
  }

}
