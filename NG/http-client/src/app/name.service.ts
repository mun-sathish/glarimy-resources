import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class NameService {
  constructor(private http: Http) { }
  getName(): Observable<string> {
    return this.http.get('/name')
      .map((response: Response) => response.json().name)
      .catch(this.onError);
  }

  onError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
