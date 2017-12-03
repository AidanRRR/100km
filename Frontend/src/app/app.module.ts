import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompanyStatComponent } from './company-stat/company-stat.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyStatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
