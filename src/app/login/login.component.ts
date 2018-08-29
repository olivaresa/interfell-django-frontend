import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = 'olivaresa';
  public password: string = '123456';
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  
  login() { 
    this.loginService.getAuth(this.username, this.password).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['/users']);
      }
    });
  }
}
