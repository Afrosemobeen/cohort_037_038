import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   usersList:any=[];
   filterFlag="disabled"
   filterModel: any={
    fullname: '',
    title:'',
    email:'',
    phoneNo:'',
    status: ''
   }
  constructor( private http:HttpClient) { }

  getAllUsers(){
    console.log("usersList of services",this.usersList);
    return this.http.get('http://localhost:5000/users')
  }
  
}
