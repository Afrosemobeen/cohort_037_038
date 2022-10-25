import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PurchaseOrderService } from 'app/services/purchase-order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css'],
})
export class UpdateOrderComponent implements OnInit {
  @Input() order: any;
  @Output() onCancelUpdateEvent: EventEmitter<any>;
  ponum: any = [];
  states: any = [];
  cities: any = [];
  poNumbers: any = [];
  orderForm = this.purchaseOrderSer.getOrderFormData();
  id: any;
  flag: boolean = false;
  maxDate: any;

  constructor(public purchaseOrderSer: PurchaseOrderService) {
    this.onCancelUpdateEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.futureDateDisable();
    this.orderForm.setValue({ ...this.order });
    this.states = this.purchaseOrderSer.getStates().subscribe((data: any) => {
      this.purchaseOrderSer.states = data;
      this.states = data;
    });
    this.cities = this.purchaseOrderSer.getCities().subscribe((data: any) => {
      this.purchaseOrderSer.cities = data;
      this.cities = data;
    });
    this.poNumbers = this.purchaseOrderSer.getPoNumber().subscribe((data) => {
      this.purchaseOrderSer.poNumbers = data;
      this.poNumbers = data;
    });
  }

  futureDateDisable() {
    var date: any = new Date();
    var todaydate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();
    if (todaydate < 10) {
      todaydate = '0' + todaydate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.maxDate = year + '-' + month + '-' + todaydate;
  }

  selectedPo(e: any) {
    this.id = e.target.value;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes: ', changes);
    console.log('Changes: ', changes['order'].currentValue);
    this.orderForm.setValue({ ...changes['order'].currentValue });
  }

  updateOrder() {
    const found = this.purchaseOrderSer.orderList.some(
      (el: any) => el.po_num === this.id
    );
    if (!found) {
      this.flag = false;
      console.log('order: ', this.orderForm.value);
      this.purchaseOrderSer.updateOrder(this.orderForm.value).subscribe({
        next: (result: any) => {
          console.log('Result: ', result);

          this.purchaseOrderSer.getAllOrders().subscribe({
            next: (data: any) => {
              console.log('data', data);
              this.purchaseOrderSer.orderList = data;
              this.cancelUpdateForm();
            },
            error: () => {},
            complete: () => {},
          });
        },
        error: () => {},
        complete: () => {},
      });
    } else {
      this.flag = true;
      console.log('Ponumber exists');
    }
  }

  cancelUpdateForm() {
    this.onCancelUpdateEvent.emit();
  }
}
