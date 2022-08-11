
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferenica.compose';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
