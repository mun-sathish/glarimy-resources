import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tap, filter, map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';

@Injectable()
export class HttpClientService {
  constructor(private http: Http) { }
  private after(o: Observable<any>, options: any): Observable<any> {
    if (options.hasOwnProperty('map')) {
      o = o.pipe(map((body: Response) => options.map(body.json())));
    }
    if (options.hasOwnProperty('tap')) {
      o = o.pipe(tap((data) => options.tap(data)));
    }
    if (options.hasOwnProperty('filter')) {
      o = o.pipe(filter(data => options.filter(data)));
    }
    if (options.hasOwnProperty('error')) {
      o = o.pipe(catchError(error => [options.error(error)]));
    }
    return o;
  }
  invoke(url: string, options: any): Observable<any> {
    if (options.method === 'get') {
      return this.after(this.http.get(url, {
        headers: options.headers
      }), options);
    }

    if (options.method === 'post') {
        return this.after(this.http.post(url, JSON.stringify(options.body), {
          headers: options.headers
        }), options);
    }

    if (options.method === 'put') {
      return this.after(this.http.put(url, JSON.stringify(options.body), {
        headers: options.headers
      }), options);
    }

    if (options.method === 'patch') {
      return this.after(this.http.patch(url, JSON.stringify(options.body), {
        headers: options.headers
      }), options);
    }

    if (options.method === 'delete') {
      return this.after(this.http.get(url, {
        headers: options.headers
      }), options);
    }
  }
}
