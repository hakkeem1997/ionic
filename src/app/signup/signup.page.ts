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
  pictures: any = [];
  photo: any;
  fileName: any;
  constructor() {}

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
      this.msg="invalid or missing";
    }
  }
 

  loadImageFromDevice(event) {

    const file = event.target.files[0];
    this.fileName = file.name;

    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    // reader.readAsArrayBuffer(file);

    reader.onload = () => {

      // get the blob of the image:
      this.fileName = reader.result;
      console.log(reader.result);

    };
    

  };

}
