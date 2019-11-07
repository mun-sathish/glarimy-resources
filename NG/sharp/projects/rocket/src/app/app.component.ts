import { Component } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'rkt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rocket';
  constructor(private service: SharedService) { }
  ngOnInit() {
    this.title = this.service.getTitle();
  }
}
