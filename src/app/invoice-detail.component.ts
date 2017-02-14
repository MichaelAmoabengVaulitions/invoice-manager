//Display the client invoice details
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Invoice }         from './invoice';
import { InvoiceService }  from './invoice.service';

@Component({
  moduleId: module.id,
  selector: 'my-invoice-detail',
  templateUrl: './invoice-detail.component.html'
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice;

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.invoiceService.getInvoice(+params['id']))
      .subscribe(invoice => this.invoice = invoice);
  }

  save(): void {
    this.invoiceService.update(this.invoice)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
