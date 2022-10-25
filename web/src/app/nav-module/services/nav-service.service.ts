import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
 private myMethodSubject = new BehaviorSubject<any>(""); 
 // added sample data to the below userdatafordropdown but originally data will come after login send to service using sendUserDataToServices() function created below
     userDataForDropdown = new BehaviorSubject<any>([{
username:"aman",
name:"aman kumar",
title:"director"}]);     

  constructor(private http: HttpClient) { }
  
// for backend part
  getNavFromDatabase(){
        return this.http.get("http://localhost:5000/navlist");
  }
      saveNavlistFromNavedit(navTodisplay:any){
        return this.http.put("http://localhost:5000/navedit", navTodisplay);
  }

  sendDataToHeader(){    
    return this.myMethodSubject.asObservable();                       
  }
  putDataFromEditNavToService(data:any){
    this.myMethodSubject.next(data);                     
  } 

      // communication for user data dropdown
    sendUserDataToServices(data:any){
      this.userDataForDropdown.next(data);
    }

    sendUserDataToheader(){
      return this.userDataForDropdown.asObservable();
    }

}
