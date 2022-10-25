import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavServiceService} from 'app/nav-module/services/nav-service.service';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-navbar-edit',
  templateUrl: './navbar-edit.component.html',
  styleUrls: ['./navbar-edit.component.scss']
})
export class NavbarEditComponent implements OnInit {
error: boolean =false;
id:any =-1;

  navdata:any = [];
  event: any;
  navitem:any=[];
  navdatas: any;

  
 
constructor(private fb: FormBuilder,private router: Router, private navService:NavServiceService) { 
  
}
  ngOnInit(): void {
          this.navService.getNavFromDatabase()
  .subscribe({
    next: (data:any)=>{
      
      this.navitem = structuredClone(data);
      console.log( "form Nav edit"+data)
      this.navdata = structuredClone(data);
      this.navdatas = structuredClone(data);
    },
    error: ()=>{},
    complete: ()=>{},
  })
  }
title = 'toolsets';
  parentSelector: boolean = true;
  isdisabled=true;

   isChecked: any;
  onChangenavList($event:any) {
  
    this.id = $event.target.value;
    this.isChecked = $event.target.checked;


    this.navitem = this.navitem.map((d: { id: any; select: boolean; }) => {
      if (d.id == this.id) {
        d.select = this.isChecked;
        
        return d;
      }
      if (this.id == -1) {
        return d;
      }
      return d;
    });

        if(JSON.stringify(this.navitem) == JSON.stringify(this.navdatas)){
    this.isdisabled= true
    }
    else{
      this.isdisabled = false;
    }
}

    saveNavList(){

    if(this.navitem.every((x: { select: boolean; }) => x.select === false)){
   
    this.error = true;
        
    this.navitem.forEach((val: { select: boolean;}, i:any) => {
      if(val.select != this.navdata[i].select )
       val.select = this.navdata[i].select });
  }
  else
  {
    
  this.error = false;
  console.log(this.navitem);
  let result = this.navitem.map((a: { select: boolean; }) => a.select);
  console.log(result);  
  this.navdata =structuredClone(this.navitem);


    this.navService.saveNavlistFromNavedit(this.navdata).subscribe({
      next:(_data:any)=>{
        console.log("passed data to datbase else");
        setTimeout(() => {  this.navService.putDataFromEditNavToService(this.navdata) }, 100);
                                             
      }
    })
    }
    // for save button logic
    this.isdisabled=true;
    this.navdatas = structuredClone(this.navdata);

  }
  closeUserSetting(){
    this.router.navigate(['/'])

  }
}
