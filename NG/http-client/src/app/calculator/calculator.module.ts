import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CalculatorComponent } from './calculator.component';
import { HttpClientService } from '../httpclient.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [CalculatorComponent],
  bootstrap: [CalculatorComponent],
  providers: [HttpClientService]
})
export class CalculatorModule { }
