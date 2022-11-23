import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  userData:any=[];
  custData:any=[];
  // router: any;
  // static parentposts: any;
  constructor( private userdataservice:UserdataService) { 
    this.userdataservice.getPaymentData().subscribe(dataa=>{
      this.userData=dataa;
    })
    this.userdataservice.getCustData().subscribe(data=>{
            this.custData=data;
          })
}

// userData:any=[];
//   // router: any;
//   // static parentposts: any;
//   constructor( private userdataservice:UserdataService) { 
//     this.userdataservice.getCustData().subscribe(dataa=>{
//       this.userData=dataa;
//     })
// }

  // constructor() { }

  ngOnInit(): void {
  }



}
