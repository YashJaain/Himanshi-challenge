import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { UserdataService } from '../userdata.service';
import { isNgTemplate } from '@angular/compiler';
import { NewComponent } from '../new/new.component';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  userData:any=[];
  constructor( private userdataservice:UserdataService, private router:Router, private route:ActivatedRoute) { 
    // private router:Router;
    this.userdataservice.getCustData().subscribe(dataa=>{
      this.userData=dataa;
    })
}

// post='';
value='';
// parentposts: any[]=[];

  ngOnInit(): void {
  }
  // AddPost(post:any){
  //   console.log(post);
  //   this.parentposts.push(post);
  // }
  SaveData(value:any[])
  {
    let data:any=value;
    this.router.navigate(['./profile'],
    {queryParams:{data:JSON.stringify(data)}})
  }
 
  }
  
