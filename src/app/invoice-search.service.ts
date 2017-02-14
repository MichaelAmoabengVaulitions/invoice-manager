//Search available invoices
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Invoice }           from './invoice';

@Injectable()
export class InvoiceSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Invoice[]> {
    return this.http
               .get(`app/invoices/?client=${term}`)
               .map(response => response.json().data as Invoice[]);
  }
}
