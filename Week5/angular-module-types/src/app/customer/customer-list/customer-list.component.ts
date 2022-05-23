import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any
  constructor() { }

  ngOnInit(): void {

    this.customers = [
      {
        id: 1,
        name: "Nitin"
      },
      {
        id: 2,
        name: "Prateek"
      },
      {
        id: 3,
        name: "Ujjwal"
      },
      {
        id: 4,
        name: "vyas"
      },
    ]
  }

}
