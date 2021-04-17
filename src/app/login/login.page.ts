import { JSDocComment, ThrowStmt } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
import { RouterModule, } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [MyserviceService]
})
export class LoginPage implements OnInit {
  loginname: any;
  loginpassword: any;
  usersignup: any;
  msg: any;
  loginuser: any;
  constructor(private routes: Router, private service: MyserviceService) {
  }
  ngOnInit() { }
  check() {
     //get a local storage from the sign up as a loginid
    let loginid = JSON.parse(localStorage.getItem('user'))   

    //find in loginid the required name and password are  in a local storage if it is in local storage its true
    if (loginid.find(res => res.name == this.loginname && res.pasword == this.loginpassword)) {
      localStorage.setItem('loginname', 'true');
      localStorage.setItem('loginuser', this.loginname);//this is for publish a username in dashboard 

      this.loginname = '';
      this.loginpassword = '';
      this.msg = '';
      this.routes.navigate(['/dashboard']);
    }



    else {
      this.msg = "invalid username or pasword";
    }
  }

  home() {
    this.loginname = '';
    this.loginpassword = '';
    this.routes.navigate(['/home']);
  }
}





