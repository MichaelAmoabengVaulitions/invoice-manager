
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { InvoiceSearchService } from './invoice-search.service';
import {Invoice } from './invoice';

@Component({
  moduleId: module.id,
  selector: 'invoice-search',
  templateUrl: './invoice-search.component.html',
  providers: [InvoiceSearchService]
})
export class InvoiceSearchComponent implements OnInit {
  invoices: Observable<Invoice[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private invoiceSearchService: InvoiceSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.invoices = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.invoiceSearchService.search(term)
        // or the observable of empty invoices if there was no search term
        : Observable.of<Invoice[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Invoice[]>([]);
      });
  }

  gotoDetail(invoice: Invoice): void {
    let link = ['/detail', invoice.id];
    this.router.navigate(link);
  }
}
