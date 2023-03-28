import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nitin',
  templateUrl: './nitin.component.html',
  styleUrls: ['./nitin.component.css']
})
export class NitinComponent implements OnInit {

  constructor() { }
  username: any=[];
  email: any=[];
  mobile: any=[];
  password: any=[];
  address: any=[];
  ngOnInit(): void {
  }
  hello(mrform1:any, mrform2: any, mrform3: any, mrform4 : any, mrform5:any){
    if(mrform1.value.length>0 && mrform2.value.length > 0 && mrform3.value.length > 0 && mrform4.value.length > 0 && mrform5.value.length > 0){
    this.username.push(mrform1.value);
    this.mobile.push(mrform2.value);
    this.email.push(mrform3.value);
    this.address.push(mrform4.value);
    this.password.push(mrform5.value);
    alert("User added successfully");
    mrform1.value="";
    mrform2.value="";
    mrform3.value="";
    mrform4.value="";
    mrform5.value="";
    }
    else{
      alert("Please give correct information");
      mrform1.value="";
      mrform2.value="";
      mrform3.value="";
      mrform4.value="";
      mrform5.value="";
    }
  }
  delete(userno:any){
    this.username.splice(userno, 1);
    this.email.splice(userno, 1);
    this.password.splice(userno, 1);
    this.mobile.splice(userno, 1);
    this.address.splice(userno, 1);
  }

}
