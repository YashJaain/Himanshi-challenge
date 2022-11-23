import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor( private http:HttpClient) { 
   }
   postcustdata(val:any)
  {
    this.http.post("https://prod-30.eastasia.logic.azure.com:443/workflows/d2d015ba894147098380be584a5a28a1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=G0rpSLI63PxaqCrMnLm5aAmzIc21T7XYndKuUCfHgAs",val).subscribe
    ((result)=>{console.warn("result",result)}
      )
  }
  myFunc(){
    console.log("function called");
  }
  ngOnInit(): void {
  }

}
