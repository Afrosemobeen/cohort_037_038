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
  
  
}
