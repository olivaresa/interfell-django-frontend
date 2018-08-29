import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: any;
  is_add: boolean = false;
  User: object = {
    first_name: '',
    last_name: '',
    academic_level: 1,
    address: '',
    city: 1,
    country: 1
  };
  
  
  constructor(private router: Router, private loginService: LoginService) {
    if (!loginService.is_login) {
      router.navigate(['']);
    }
  }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers() {
    this.loginService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
  
  addUser() { 
    this.getUsers();
    this.is_add = true;
  }
  
  cancel() { 
    this.getUsers();
    this.is_add = false;
  }
  
  saveUser() {
    this.loginService.postUser(this.User).subscribe((data: any) => {
      this.getUsers();
      this.is_add = false;
    });
  }
}
