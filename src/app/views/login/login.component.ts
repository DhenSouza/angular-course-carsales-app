import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  requestLogin: RequestLogin = new RequestLogin();

  constructor() { }

  ngOnInit() {
    this.requestLogin = new RequestLogin();
    }

    public doLogin(): void {
      console.log(this.requestLogin)
    }
  }


