import { Component, OnInit } from '@angular/core';
import { PracticeComponent } from '../practice/practice.component';


@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  username:string="";
  email:string="";
  mobile:string="";
  address:string="";
  password:string="";
  constructor() { }

  ngOnInit(): void {
  }
  fetchdata(prouser :any){
    this.username = prouser.username;
    this.email = prouser.email;
    this.mobile = prouser.mobile;
    this.address = prouser.address;
    this.password = prouser.password
  }
}
