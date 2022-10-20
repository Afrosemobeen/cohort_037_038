import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
 private myMethodSubject = new BehaviorSubject<any>(""); 
  constructor(private http: HttpClient) { }
  
// for backend part
  getNavFromDatabase(){
        return this.http.get("http://localhost:5000/navlist");
  }
      saveNavlistFromNavedit(navTodisplay:any){
        return this.http.put("http://localhost:5000/navedit", navTodisplay);
  }


}
