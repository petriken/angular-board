import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login: string;
  public password: string | number;

  constructor(public router: Router) { }

  getToken(): [string, string | number] {
    return this.getLocalStorageItem('login', 'password');
  }

  public setLocalStorage(login, password) {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
  }

  private getLocalStorageItem(login, password): [string, string | number] {
    const log = localStorage.getItem(login);
    const passw = localStorage.getItem(password);

    return [log, passw];
  }

  onLogin(login, password) {
    this.login = login;
    this.password = password;
    if (login && password) {
      this.setLocalStorage(login, password);
      this.router.navigate(['/board-page']);
    }
  }

  onLogOut() {
    localStorage.clear();
    this.router.navigate(['/login-page']);
  }
}
