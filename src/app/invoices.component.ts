//Invoice list component for adding invoices and removing paid invoices
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Invoice } from './invoice';
import { InvoiceService } from './invoice.service';

@Component({
  moduleId: module.id,
  selector: 'my-invoices',
  templateUrl: './invoices.component.html'
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];
  selectedInvoice: Invoice;

  constructor(
    private router: Router,
    private invoiceService: InvoiceService) { }

  getInvoices(): void {
    this.invoiceService.getInvoices().then(invoices => this.invoices = invoices);
  }
//Add Invoice information
  add(client: string): void {
    client = client.trim();
    if (!client) { return; }
    this.invoiceService.create(client)
      .then(invoice => {
        this.invoices.push(invoice);
        this.selectedInvoice = null;
      });
  }

  addGroup(clientGroup: string): void {
    clientGroup = clientGroup.trim();
    if (!clientGroup) { return; }
    this.invoiceService.create(clientGroup)
      .then(invoice => {
        this.invoices.push(invoice);
        this.selectedInvoice = null;
      });
  }





  delete(invoice: Invoice): void {
    this.invoiceService
        .delete(invoice.id)
        .then(() => {
          this.invoices = this.invoices.filter(h => h !== invoice);
          if (this.selectedInvoice === invoice) { this.selectedInvoice = null; }
        });
  }


  ngOnInit(): void {
    this.getInvoices();
  }

  onSelect(invoice: Invoice): void {
    this.selectedInvoice = invoice;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedInvoice.id]);
  }
}
