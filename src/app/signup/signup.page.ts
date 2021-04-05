import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: any;
  email: any;
  password: any;
  confirmpassword: any;
  usersignup: any = [];
  msg: any;
  constructor() { }

  ngOnInit() {
  }
  signup() {
    if (this.password == this.confirmpassword && /[^a-zA-Z0-9]/.test(this.password) && /[^a-zA-Z0-9]/.test(this.username) && /[^a-zA-Z0-9]/.test(this.email)) {
      let a = {
        "name": this.username,
        "pasword": this.password
      }
      if (!localStorage.getItem('a')) {
        this.usersignup.push(a);

        localStorage.setItem("a", JSON.stringify(this.usersignup));
      }
      else {
        let existingData = JSON.parse(localStorage.getItem('a'));
        existingData.push(a);
        localStorage.setItem("a", JSON.stringify(existingData));
      }
    }
    else {
      alert("invalid or missing")
    }
  }
  // if(!localStorage.getItem('initData')){
  //   $window.localStorage.setItem('initData', JSON.stringify($scope.initData));
  //   }

}
