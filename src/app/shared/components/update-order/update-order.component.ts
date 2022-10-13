import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  @Input() order: any;
  @Output() onCancelUpdateEvent: EventEmitter<any>;

  po_number: string = '';
  date: string = '';
  total_amount: string = '';
  username: string = '';
  desc: string = '';
  state: string = '';
  city: string = '';
  constructor() {
    this.onCancelUpdateEvent = new EventEmitter();
  }

  ngOnInit(): void {}

  cancelUpdateForm() {
    this.onCancelUpdateEvent.emit();
  }
}
