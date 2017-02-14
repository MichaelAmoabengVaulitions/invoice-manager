//Configure routes
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { InvoicesComponent }      from './invoices.component';
import { InvoiceDetailComponent }  from './invoice-detail.component';
import { InvoiceFormComponent }  from './invoice-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: InvoiceDetailComponent },
  { path: 'invoices',     component: InvoicesComponent },
  { path: 'form',     component: InvoiceFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

//Export class to be available for other components
export class AppRoutingModule {}
