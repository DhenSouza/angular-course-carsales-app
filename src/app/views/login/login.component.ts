import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { ResponseLogin } from 'src/app/resources/models/ResponseLogin';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  requestLogin: RequestLogin = new RequestLogin();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.requestLogin = new RequestLogin();
    }

    public doLogin(): void {
      this.loginService.doLogin(this.requestLogin).subscribe((data) => {
        console.log(data);
      },
      error => {
        console.error(401, error);
      })
    }
  }


