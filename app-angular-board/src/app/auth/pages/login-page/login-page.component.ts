import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public login: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.onLogin(this.login, this.password);
  }


}
