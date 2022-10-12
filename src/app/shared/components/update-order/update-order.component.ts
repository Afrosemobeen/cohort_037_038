import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
<<<<<<< HEAD
  

=======
  po_number: String = '';
  date: any;
  total_amount: Number | undefined;
  username: String = '';
  desc: string = '';
  state: String = '';
  city: String = '';
>>>>>>> bccfc5934f3065d3fdcf2383a10c9c5598bcae11
  constructor() {}

  ngOnInit(): void {
  }


}
