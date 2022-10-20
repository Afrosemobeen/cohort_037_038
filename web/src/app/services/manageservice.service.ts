import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManageserviceService {

  lookupList: any=[]
  lookupInfo: any={
    lookupType:'',
    lookupTypeItems:[]
  }
  constructor(private http:HttpClient, private fbSer:FormBuilder) { }

  getLookupsByType(type: any){
    console.log("type: ", type);
    return this.http.get('http://localhost:5000/lookups/'+type)
  }
  
  createLookup(lookupObj: any){
    return this.http.post('http://localhost:5000/lookups', lookupObj)
  }

}
