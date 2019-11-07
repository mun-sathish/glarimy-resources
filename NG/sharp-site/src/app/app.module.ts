import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SsdiModule } from 'ssdi';
import { SlaModule } from 'sla';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SsdiModule,
    SlaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
