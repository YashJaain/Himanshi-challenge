import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  private subject = new Subject<any>();
  sendClickEvent(){
    this.subject.next;
  }  
  getClickevent():Observable<any>{
    return this.subject.asObservable();
  }
}
