import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Image} from '../model/image';

@Injectable()
export class GalleryService {

  constructor(private http: Http) {}

  getGellary(): Observable<Image[]>{
    return this.http.get('assets/gallery.json')
    .map((response: Response) => {
      let body = response.json();
      return body.images || [];
    })
    .catch((err: any) => {
      console.log('sever error:', err);  // debug
      if(err instanceof Response) {
        return Observable.throw(err.json().error || 'backend server error');
      }
      return Observable.throw(err || 'backend server error');
    }); 
  }

}