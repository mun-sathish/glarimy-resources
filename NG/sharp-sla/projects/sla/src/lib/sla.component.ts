import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sla-sla',
  template: `
    <dir-directory></dir-directory>
    <i>
    <h2>SLA Employee List</h2>
    SSDI Employee List goes here
    </i>
  `,
  styles: []
})
export class SlaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
