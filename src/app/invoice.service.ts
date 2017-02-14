//Services to be included in multiple components
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Invoice } from './invoice';

@Injectable()
export class InvoiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private invoicesUrl = 'api/invoices';  // URL to web api


//API requests
  constructor(private http: Http) { }

  getInvoices(): Promise<Invoice[]> {
    return this.http.get(this.invoicesUrl)
               .toPromise()
               .then(response => response.json().data as Invoice[])
               .catch(this.handleError);
  }


  getInvoice(id: number): Promise<Invoice> {
    const url = `${this.invoicesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Invoice)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.invoicesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(client: string): Promise<Invoice> {
    return this.http
      .post(this.invoicesUrl, JSON.stringify({client: client}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(invoice: Invoice): Promise<Invoice> {
    const url = `${this.invoicesUrl}/${invoice.id}`;
    return this.http
      .put(url, JSON.stringify(invoice), {headers: this.headers})
      .toPromise()
      .then(() => invoice)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
