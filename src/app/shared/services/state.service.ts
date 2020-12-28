import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPLaceHolderAnswer} from '@app/modules/home/components/home/home-http.api.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  placeHolderAnswer: BehaviorSubject<IPLaceHolderAnswer | null> = new BehaviorSubject<IPLaceHolderAnswer | null>(null);

}
