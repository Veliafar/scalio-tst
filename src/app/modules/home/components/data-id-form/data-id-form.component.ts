import {Component, OnDestroy, OnInit} from '@angular/core';
import {RegexConstants} from '@core/validators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HomeHttpApiService, IPLaceHolderAnswer} from '../home/home-http.api.service';
import {Subject} from 'rxjs';
import {NotificationService} from '@shared/services/notification.service';
import {takeUntil} from 'rxjs/operators';
import {StateService} from '@shared/services/state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-id-form',
  templateUrl: './data-id-form.component.html',
  styleUrls: ['./data-id-form.component.scss']
})
export class DataIdFormComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  onlyIntAndNull = RegexConstants.numberWithNull;
  dataIdForm: FormGroup = new FormGroup({
    dataId: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    private homeHttpApi: HomeHttpApiService,
    private notificationService: NotificationService,
    private stateService: StateService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  getData(): void {
    this.homeHttpApi.getDataById(this.dataIdForm.controls.dataId.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res: IPLaceHolderAnswer) => {
          if (res?.body && res?.title && res?.id) {
              this.stateService.placeHolderAnswer.next(res);
              this.router.navigate([`/details`, res.id]).then(() => {});
          } else if ( !res?.body || !res?.title) {
            this.notificationService.warningPopUp('unfortunately some data is not enough');
          }
        },
        err => this.notificationService.checkError(err)
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
