import { Component } from '@angular/core';
// import { UserdataService } from '../userdata.service';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newproject';
  paymentRequest= {
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethod:[
      {
        type:"CARD",
        parameters:{
          allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
          allowedCardNetworks:["AMEX","VISA","MASTERCARD",]
        },
        tokenizationSpecification: {
          type:"PAYMENT_GATEWAY",
          parameters:
          {
            gateway:"example",
            gatewayMerchantID:"exampleMerchantGatewayID"
          } 
        }
      }
    ],
    marchantInfo:{
      marchantID:"123456789",
      marchantName:"DemoMarchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPRice:"100.00",
      currencyCode:"USD",
      countryCode:"US"
    }
  };
  onLoadPaymentData(event:any):void
  {
    console.log("Load Payment Data By Testing",event.details);
  }
  // constructor( private userdataservice:UserdataService) { 
  //   this.userdataservice.getUserData().subscribe(data=>{
  //     console.log(data);
  //   })
}
