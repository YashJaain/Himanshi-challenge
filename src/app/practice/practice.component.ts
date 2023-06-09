import { Component,Input, OnInit } from '@angular/core';
// import {MatTableModule} from '@angular/material/table';
import { UserdataService } from '../userdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})


export class PracticeComponent implements OnInit {
  Username:string = "Enter username";
 userlist:any=[];

  onClick(prouser :any){
    if(prouser.value.length>0){
    this.userlist.push(prouser.value);
    alert("User added successfully");
    prouser.value="";
    }
    else{
      alert("Please fill correct username");
    }
  }
  onDelete(deleteme: any){
    this.userlist.splice(deleteme, 1)
    alert("User removed successfully");
  }
  // ELEMENT_DATA: Element[]=[];
  data:any;
  userData:any=[];
  constructor( private userdataservice:UserdataService, private router:Router, private route : ActivatedRoute) { 
    this.userdataservice.getCustData().subscribe(dataa=>{
      this.userData=dataa;
    })
   
  }
  
  


  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{console.log(params);
    this.data=JSON.parse(params['data']);
    })
  }
 
  // @Input() childPosts:any[]=[];
  // childPosts=EmployeeListComponent.parentposts

}
