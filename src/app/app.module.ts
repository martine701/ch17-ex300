import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DetailComponent,PleaseSelectComponent } from './app.component';
import { CustomerService } from './customerService';
import { Customer } from './customer';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, PleaseSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
