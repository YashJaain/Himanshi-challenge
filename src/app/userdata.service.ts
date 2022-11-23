import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject ,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  // private messagesource=new BehaviorSubject(this.editDatadetails);

  getUserData(){
    let apiurl="https://prod-12.eastasia.logic.azure.com:443/workflows/4bca4dc50d3842aba16d7ed71b4ad6cf/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iz-0SRxSPdODlg6TfuwqCU5ZVAu762vUmzjBF_xeW_8";
    return this.http.get(apiurl);
  }
  getCustData(){
    let apiurl="https://prod-30.eastasia.logic.azure.com:443/workflows/d2d015ba894147098380be584a5a28a1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=G0rpSLI63PxaqCrMnLm5aAmzIc21T7XYndKuUCfHgAs";
    return this.http.get(apiurl);
  }
  getPaymentData(){
    let apiurl="https://prod-12.eastasia.logic.azure.com:443/workflows/4bca4dc50d3842aba16d7ed71b4ad6cf/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iz-0SRxSPdODlg6TfuwqCU5ZVAu762vUmzjBF_xeW_8";
    return this.http.get(apiurl);
  }
  
  // getCustData(){
  //   let apiurl="https://prod-24.eastasia.logic.azure.com:443/workflows/7cb5d35f6bcd4e998bbad9978b530607/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uleMNy5QdIB_NkIrt4o2aZZj1svR4_ShAA0P5Y40x6M";
  //   return this.http.get(apiurl).map(
  //     res=>{
  //       return res.json
  //     }
  //   )
  // }

  postUserData(info:any){
    // let apiurl="https://prod-25.eastasia.logic.azure.com:443/workflows/e473ea4bf5da471d87a64d7039710571/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UO_70N6Ev_DtXmLA_QHqykbFfqwEnLFEnymeb2ekAr8";
    return this.http.post("https://prod-25.eastasia.logic.azure.com:443/workflows/e473ea4bf5da471d87a64d7039710571/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UO_70N6Ev_DtXmLA_QHqykbFfqwEnLFEnymeb2ekAr8",info);
  }
  }

