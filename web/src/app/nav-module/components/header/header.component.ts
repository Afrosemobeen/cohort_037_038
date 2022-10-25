import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavServiceService} from 'app/nav-module/services/nav-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pagetitle: String ="";
  public serNav:any=[];
  userdata: any;
  constructor( private navService:NavServiceService, private router: Router) {
    this.navService.sendUserDataToheader().subscribe({
  next:(data:any)=>{
    this.userdata = structuredClone(data);
  },
  error:()=>{},
  complete:()=>{}
})
  }
   
    ngOnInit(): void {
  
  const data = this.navService.sendDataToHeader();
    data.subscribe({
      next: (_data:any)=>{
        
          this.navService.getNavFromDatabase()
    .subscribe({
      next: (data:any)=>{
       
        this.serNav = structuredClone(data);
       
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

  logout(){
  this.router.navigate(['/extra']);
  this.navService.userDataForDropdown.next(null as any);
}

  
  }
