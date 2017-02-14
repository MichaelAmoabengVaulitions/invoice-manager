//More work to be done here
import { Component } from '@angular/core';

import { Invoice }    from './invoice';
import { InvoiceService }  from './invoice.service';

@Component({
  moduleId: module.id,
  selector: 'invoice-form',
  templateUrl: './invoice-form.component.html'
})
export class InvoiceFormComponent {

  groups = ['premium', 'regular'];

  model = new Invoice(2,'Amoabeng', this.groups[0], 3, '',2, false);
  submitted = false;

  showFormControls(form: any) {
   return form && form.controls &&
   form.controls.value;
 }

  onSubmit() { this.submitted = true; }

  newInvoice() {
  this.model = new Invoice(42, '', this.groups[0],2,'',1, false);
}

}
