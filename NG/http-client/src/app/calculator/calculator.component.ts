import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../httpclient.service';

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  name: string;
  constructor(private client: HttpClientService) { }

  ngOnInit() {
    this.client.invoke(
      'https://ansznhx4he.execute-api.us-east-1.amazonaws.com/v1/glarimy-quiz/topics',
      {
        method: 'get',
        tap: (topics: Array<any>) => topics.forEach(t => console.log(t)),
        map: (topics: Array<any>) => topics.map(e => e.title.toLowerCase()),
        filter: (topics: Array<string>) => topics.length === 2,
        error: (error: any) => this.name = 'Failed to fetch'
      }).subscribe(
        topic => this.name = topic
      );
  }
}
