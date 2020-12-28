import { Injectable } from '@angular/core';
import {
  stringNullUndefined,
  numberNullUndefined
} from '@app/shared/models/types';
import { HttpApiService } from '@core/api/http.api.service';
import { Observable } from 'rxjs';

export interface IPLaceHolderAnswer {
  body: stringNullUndefined;
  title: stringNullUndefined;
  id: numberNullUndefined;
  userId: numberNullUndefined;
}


@Injectable({
  providedIn: 'root'
})
export class HomeHttpApiService {


  constructor(
    private httpApi: HttpApiService
  ) {
  }

  getDataById(id: string): Observable<IPLaceHolderAnswer> {
    return this.httpApi.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
