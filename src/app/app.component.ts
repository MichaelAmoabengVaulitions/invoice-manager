// Main application cpmponent
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'invoice-manager',
  template: `
    <nav class="navbar navbar-inverse bg-inverse navbar"> <!--navbar begins here-->
       <div class="container">
         <div class="navbar-header">
           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
             <span class="sr-only">Toggle navigation</span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
           </button>
           <a class="navbar-brand" href="#">{{title}}</a>
         </div>
         <div id="navbar" class="collapse navbar-collapse">
           <ul class="nav navbar-nav">
              <li><a routerLink="/dashboard" routerLinkActive="active">Active Clients</a></li>
              <li><a routerLink="/invoices" routerLinkActive="active">Invoice List</a></li>
              <li><a routerLink="/form" routerLinkActive="active">Generate Invoice</a></li>

           </ul>
         </div>
       </div>
     </nav><!--navbar ends here-->
     
<!--Router outlet for the other components-->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Invoice Manager';
}
