import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(apiUrl: string, params?: any): Observable<any> {
    return this.httpClient
      .get(apiUrl, {params});
  }

  post(apiUrl: string, body?: any, params?: any): Observable<any> {
    return this.httpClient
      .post(apiUrl, body, params);
  }

  put(apiUrl: string, body: any, params?: any): Observable<any> {
    return this.httpClient
      .put(apiUrl, body, params);
  }

  delete(apiUrl: string): Observable<any> {
    return this.httpClient
      .delete(apiUrl);
  }
}
