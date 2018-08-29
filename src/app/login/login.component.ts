import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = 'olivaresa';
  public password: string = '123456';
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  
  login() { 
    
    console.log('*************');
    console.log(localStorage);
    console.log('*************');
    
    this.loginService.getAuth(this.username, this.password).subscribe(data => {
      // console.log(data.token);
    }, err => {
      console.log(err);
    });
  }
}
