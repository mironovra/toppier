import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 

@Injectable()
export class AuthService {
    isLoggedIn:boolean;
    constructor(private _http: Http) {
     this.isLoggedIn = false;
   }

  loginFn(usercreds)
  {
    this.isLoggedIn = false;
    var headers = new Headers();
    var creds = "name=" + usercreds.name + "&password=" + usercreds.password;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return new Promise(resolve => {
        this._http.post('http://localhost:3333/authenticate', creds, {headers: headers}).subscribe(data => {
          if(data.json().success){
            window.localStorage.setItem('auth_key', data.json().token);
            this.isLoggedIn = true; 
          }
           resolve(this.isLoggedIn);
        });
    });
  }
}
