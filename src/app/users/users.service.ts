import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private loginService: LoginService) { }
  
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.loginService.token
      })
    };
  }

  getUsers() {
    return this.http.get(this.loginService.api_url + '/users/', this.getHttpOptions());
  }

  postUser(user) {
    return this.http.post(this.loginService.api_url + '/users/', user ,this.getHttpOptions());
  }
}
