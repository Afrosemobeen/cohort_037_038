import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getUser(){
    return   this.http.get("http://localhost:5000/users")
  }
  createUser(user: any){
    return  this.http.post<any>("http://localhost:5000/users", user)
  }
}
