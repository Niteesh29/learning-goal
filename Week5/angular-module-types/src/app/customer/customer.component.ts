import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    template: `
    <p>Customer Home page</p>
    <a routerLink="customer-list">
        <button class="btn btn-success">Show Customer List</button>
    </a>
    
    `,
    styles: []
})
export class CustomerComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {


    }

}