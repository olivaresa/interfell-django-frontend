import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api_url: string = 'http://localhost:8000';
  
  constructor(private http: HttpClient) {

  }

  getAuth(username, password) {

    return this.http.post(this.api_url + '/api-token-auth/', {
      username: username,
      password: password,
    });
  }


}
