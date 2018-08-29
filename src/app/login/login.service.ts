import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api_url: string = 'http://localhost:8000';
  public is_login: boolean = false;
  private token: string;
  
  
  constructor(private http: HttpClient) {
    
  }

  getAuth(username, password){
    return new Observable((observer) => {
      this.http.post(this.api_url + '/api-token-auth/', {
        username: username,
        password: password,
      }).subscribe((data: any) => {
        this.is_login = true;
        this.token = data.token;
        observer.next(true);
        observer.complete()
      }, err => {
        this.is_login = false;
        observer.next(false);
        observer.complete()
      });

    });
  
  }

}
