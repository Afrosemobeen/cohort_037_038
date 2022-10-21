import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { ManageserviceService } from 'src/app/services/manageservice.service';

@Component({
  selector: 'app-display-lookup-types',
  templateUrl: './display-lookup-types.component.html',
  styleUrls: ['./display-lookup-types.component.css']
})
export class DisplayLookupTypesComponent implements OnInit {

  @Input() lookupInfo:any
  @Output() onChangeLookup : EventEmitter<any>
 
  p: number=1;
  newLookupValue: String = ''
  
  constructor(private manageSer: ManageserviceService) { 
    this.onChangeLookup =new EventEmitter()
  }

  ngOnInit(): void {
    console.log("lookupInfo:", this.lookupInfo);
  }
  
  createLookup(){
    const lookupType= this.manageSer.lookupInfo.lookupType
    console.log("lookuptype", lookupType);
    this.manageSer.getLookupsByType(lookupType)
    .subscribe({
      next: (result:any)=>{
        console.log("result:", result);
        console.log("newLookupValue",this.newLookupValue);

       let filteredLookups = result.filter((lookup: any)=>{
          return this.lookupInfo.lookupType ===  lookup.lookup_type && lookup.lookup_value === this.newLookupValue
        })
        console.log("filteredLookups", filteredLookups);
        
       if(filteredLookups.length > 0){
        alert("duplicate value");
       }
       else{
        let newLookupObj = {
          status: "active",
          lookup_type: this.lookupInfo.lookupType,
          lookup_value: this.newLookupValue
        }
        
        this.manageSer.createLookup(newLookupObj).subscribe({
        next: (result) => {
          console.log('createresult:', result);
          this.clearForm();
          this.manageSer.getLookupsByType(lookupType).subscribe({
            next: (data: any) => {
              console.log('data:', data);
              let newLookupInfo ={...this.lookupInfo, lookupTypeItems: data}
              this.onChangeLookup.emit(newLookupInfo)
            },
            error: () => {},
            complete: () => {},
          });
        },
        error: () => {},
        complete: () => {},
      });
        
       }
      },
        error: ()=>{
          alert("Something went wrong");
        },
        complete: ()=>{}
      })
  }

  clearForm() {
      this.newLookupValue = '';
    }

}
