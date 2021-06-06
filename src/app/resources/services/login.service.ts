import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.server + environment.port

  constructor(
    private http: HttpClient
  ) {}


  public doLogin(resquestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`${this.baseUrl}/api/login`, resquestLogin);
  }
}
