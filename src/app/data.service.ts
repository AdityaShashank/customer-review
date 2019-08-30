import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
 result: any;
 // tslint:disable-next-line: deprecation
 // tslint:disable-next-line: variable-name
// constructor(private _http: Http) { }
 //getUsers() {
  // return this._http.get('/api/users')
  //   .map(result => this.result = result.json().data);
 //}

}
