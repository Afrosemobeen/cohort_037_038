import { Component, OnInit } from '@angular/core';
import {NavServiceService} from 'app/nav-module/services/nav-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pagetitle: String ="";
  public serNav:any=[];
  constructor( private navService:NavServiceService) {}
   
    ngOnInit(): void {
  
  const data = this.navService.sendDataToHeader();
    data.subscribe({
      next: (_data:any)=>{
          //console.log("elsfpdkfpoesop")
          this.navService.getNavFromDatabase()
    .subscribe({
      next: (data:any)=>{
        // console.log("Data:",data);
        this.serNav = structuredClone(data);
        // this.sendnavhardcopy = structuredClone(this.serNav);
        this.navService .sendInitialDataToService(data);
        //console.log("rigjiofvafdkfpldskvdlvldddddddddddddddddddddddd")
      },
      error: ()=>{},
      complete: ()=>{},
    })
  
      }, error: (err:any)=>{
        console.log(err);
      }
    }) ;
  
    }
  
  pageHeading(pagetitle:String){
  this.pagetitle = pagetitle;
  }
  
  }
