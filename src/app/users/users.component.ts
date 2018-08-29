import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {
    if (!loginService.is_login) {
      router.navigate(['']);
    }
  }

  ngOnInit() {
    console.log(this.loginService.is_login);
  }

}
