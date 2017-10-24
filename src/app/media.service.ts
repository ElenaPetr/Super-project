import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Media} from './media';


@Injectable()
export class MediaService {

private headers = new Headers({'Content-Type': 'application/json'});
  private mediaUrl = 'api/media';  
  
  constructor(private http: Http) { }
  
   getMedias(): Promise <Media[]> {
  return this.http.get(this.mediaUrl)
             .toPromise()
             .then(response => response.json() as Media[])
             .catch(this.handleError)
			 }
			 
	getMedia(id: string): Promise<Media> {
    const url = `${this.mediaUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Media)
      .catch(this.handleError);
  }
  
  update(media:Media): Promise<Media> {
  const url = `${this.mediaUrl}/${media.id}`;
 return this.http
   .put(url, JSON.stringify(media), {headers: this.headers})
    .toPromise()
   .then(() => media)
    .catch(this.handleError);
}
  
   create(id,url,description): Promise<Media> {
    return this.http
      .post(this.mediaUrl, JSON.stringify({id:id,url:url,description:description}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Media)
      .catch(this.handleError);
  }
  
  
  
  delete(id: string): Promise<void> {
  const url = `${this.mediaUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
  
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
  
}