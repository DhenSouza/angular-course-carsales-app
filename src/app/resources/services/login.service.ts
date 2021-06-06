import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
    http: HttpClient
   }


  public doLogin(resquestLogin: RequestLogin) {

  }
}
