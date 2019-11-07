import { Component } from '@angular/core';

@Component({
  selector: 'sharp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sla: boolean;
  ssdi: boolean;
  constructor() {
    this.sla = this.ssdi = false;
  }
  onSla(): void {
    this.sla = this.sla === true ? false : true;
  }
  onSsdi(): void {
    this.ssdi = this.ssdi === true ? false : true;
  }
}