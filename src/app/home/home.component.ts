import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { NewComponent } from '../new/new.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData:any=[];

  constructor( private userdataservice:UserdataService) {

    this.userdataservice.getUserData().subscribe(data=>{

      this.userData=data;

    })
    
 }


  ngOnInit(): void {
  }

}
