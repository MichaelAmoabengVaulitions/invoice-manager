import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Imports from the other components
import { AppComponent } from './app.component';
import { InvoiceDetailComponent} from './invoice-detail.component';
import { DashboardComponent} from './dashboard.component';
import { InvoicesComponent} from './invoices.component';
import { InvoiceService} from './invoice.service';
import { InvoiceSearchComponent }  from './invoice-search.component';
import { InvoiceFormComponent }  from './invoice-form.component';




@NgModule({
  declarations: [
    AppComponent,
    InvoiceDetailComponent,
    InvoicesComponent,
    DashboardComponent,
    InvoiceSearchComponent,
    InvoiceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
