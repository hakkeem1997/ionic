import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
userid:any;
  constructor() { }

  ngOnInit() {
  }
  clearid(){

     this.userid=JSON.parse(localStorage.getItem('a'));
    localStorage.clear();
  }
}
