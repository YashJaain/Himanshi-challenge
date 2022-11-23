import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

}
