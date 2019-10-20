import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  public imagePath = 'assets/angular.png';
  public login: string;

  ngDoCheck() {
    this.login = this.authService.getToken()[0];
  }

  constructor(public router: Router, private authService: AuthService) { }

  public goToLoginPage() {
    this.router.navigate(['login-page']);
  }

  onLogOut() {
    this.authService.onLogOut();
  }
}
