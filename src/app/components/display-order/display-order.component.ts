import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css'],
})
export class DisplayOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  purchaseList: PurchaseList[] = [
    {
      po_num: 'po123',
      date: '22 / 10 / 2011',
      total_amt: 12000,
      user_name: 'Snehal',
      desc: 'I am snehal',
      state: 'Karnataka',
      city: 'Belgaum',
    },
    {
      po_num: 'po456',
      date: '21 / 15 / 2011',
      total_amt: 12500,
      user_name: 'Pranay',
      desc: 'I am Pranay',
      state: 'Maharashtra',
      city: 'Mumbai',
    },
    {
      po_num: 'po789',
      date: ' 22 / 09 / 2022',
      total_amt: 23000,
      user_name: 'Ganesh',
      desc: 'I am Ganesh',
      state: 'Karnataka',
      city: 'Dharwad',
    },
    {
      po_num: 'po563',
      date: '15 / 10 / 2016',
      total_amt: 52000,
      user_name: 'Sarthak',
      desc: 'I am Sarthak',
      state: 'Karnataka',
      city: 'Belgaum',
    },
  ];
}

class PurchaseList {
  po_num: String = '';
  date: any;
  total_amt: Number | undefined;
  user_name: String = '';
  desc: string = '';
  state: String = '';
  city: String = '';
}

// var purchaseList = [
//   {
//     po_num: 'po123',
//     date: 22 / 10 / 2011,
//     total_amt: 12000,
//     user_name: 'Snehal',
//     desc: 'I am snehal',
//     state: 'Karnataka',
//     city: 'Belgaum',
//   },
//   {
//     po_num: 'po456',
//     date: '21 / 15 / 2011',
//     total_amt: 12500,
//     user_name: 'Pranay',
//     desc: 'I am Pranay',
//     state: 'Maharashtra',
//     city: 'Mumbai',
//   },
//   {
//     po_num: 'po789',
//     date: ' 22 / 09 / 2022',
//     total_amt: 23000,
//     user_name: 'Ganesh',
//     desc: 'I am Ganesh',
//     state: 'Karnataka',
//     city: 'Dharwad',
//   },
//   {
//     po_num: 'po563',
//     date: '15 / 10 / 2016',
//     total_amt: 52000,
//     user_name: 'Sarthak',
//     desc: 'I am Sarthak',
//     state: 'Karnataka',
//     city: 'Belgaum',
//   },
// ];
