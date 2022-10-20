import { state } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ManageserviceService} from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onChangeLookup : EventEmitter<any>
  
  lookupInfo: any={
    lookupType:'',
    lookupTypeItems:[]
  }
constructor(public manageSer:ManageserviceService){
  this.onChangeLookup =new EventEmitter()
}
ngOnInit(): void {
}  

lookupChangeHandler(lookup: any){
  console.log("lookup:", lookup);
  this.lookupInfo.lookupType=lookup.value
   this.manageSer.getLookupsByType(lookup.value)
    .subscribe({
      next: (data: any)=>{
        console.log("data:",data);
        this.manageSer.lookupList = data
        this.lookupInfo.lookupTypeItems=data;
        console.log("lookup", this.lookupInfo);
        this.manageSer.lookupInfo=this.lookupInfo;
        this.onChangeLookup.emit(this.lookupInfo)
      },
      error:()=>{},
      complete:()=>{}
    })
  
 }
 
}
