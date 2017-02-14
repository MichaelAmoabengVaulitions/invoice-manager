//Functionality for showing a list of the active clients
import { Component, OnInit } from '@angular/core';

import { Invoice } from './invoice';
import { InvoiceService } from './invoice.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices()
     .then(invoices => this.invoices = invoices.slice(0, 11));
  }
}
