import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = environment.apiroot;
  apiKey = environment.apikey;
  headers = new HttpHeaders().set('X-API-Key', this.apiKey);

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() =>errorMessage);
  }

  getlist() {
    return this.http.get<any>(this.rootURL + 'poi', {headers: this.headers});
  }

  getlistofchargerNearby() {
    return this.http.get<any>(this.rootURL + 'poi', {headers: this.headers}).pipe(retry(2), catchError(this.handleError));
  }

}
