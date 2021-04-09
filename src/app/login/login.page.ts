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
  constructor(private routes: Router, private service: MyserviceService) {
  }
  ngOnInit() {}
  check() {
    
    let b = JSON.parse(localStorage.getItem('a'))

    if (b.find(res => res.name == this.loginname && res.pasword == this.loginpassword)){
      localStorage.setItem('loginname', 'true');
      this.routes.navigate(['/dashboard']);
    }



      else {
        // this.router.navigate(['/home'])
        //  alert("invalid");
        this.msg="invalid username or pasword";

      }


    // }
   
  }
  
}


