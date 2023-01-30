import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public loggedIn:Boolean = false;

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(TOKEN_KEY);

    if(user.id == null || user.id == undefined){
      return;
    }

    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user.id));
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(user.access_token));
    
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getToken(): any {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token && token !== 'undefined') {
      return JSON.parse(token);
    }
    return null;
  }

  public isLoggedIn(): Boolean {
    const user = this.getToken();
    (user !== null) ? this.loggedIn = true : this.loggedIn = false;
    
    return this.loggedIn;

  }

  public removeSession(): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(TOKEN_KEY);
  }
}
