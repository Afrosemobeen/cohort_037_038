import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  lookupInfo:any
  showStates:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  getLookupInfo(data: any){
    console.log("commonData", data.lookupType);
    this.showStates=true
    this.lookupInfo =data;
    console.log("lookupinfo :", this.lookupInfo);
  }

}
