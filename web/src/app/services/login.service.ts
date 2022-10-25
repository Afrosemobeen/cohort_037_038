import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  signupForm: any=[];
  constructor(private http: HttpClient) { }
  getUser(){
    return   this.http.get("http://localhost:5000/users")
  }
  createUser(user: any){
    console.log("value: ", this.signupForm);
    return  this.http.post("http://localhost:5000/users", user)
  }
  checkLogin(user: any){
    console.log("user value: ", user);
    return  this.http.post("http://localhost:5000/users/login", user)
  }
}
