import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Image } from '../model/image';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }
  /**
   * @method : getGellary
   * @purpose : to get gallery images from server
   * @input :
   * @return : Image(Array)
   */
  getGellary(): Observable<Image[]> {
    return this.http.get('assets/gallery.json')
      .map((response: Response) => {
        let body = response.json();
        return body.images || [];
      })
      .catch((err: any) => {
        // Error handling 
        return Observable.throw(err || 'backend server error');
      });
  }

}