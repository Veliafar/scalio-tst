import { Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '@shared/services/state.service';
import { Observable, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeHttpApiService, IPLaceHolderAnswer } from '@app/modules/home/components/home/home-http.api.service';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from '@shared/services/notification.service';
import { stringNullUndefined } from '@shared/models/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  title: stringNullUndefined = 'Details';
  body: stringNullUndefined = 'Data is empty. Go back to home page and enter id';

  placeHolderData: Observable<any> = this.state.placeHolderAnswer;

  constructor(
    private state: StateService,
    private async: AsyncPipe,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private homeHttpApi: HomeHttpApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setData();
  }

  setData(): void {
    if (this.async.transform(this.placeHolderData)?.title && this.async.transform(this.placeHolderData)?.body) {
      this.title = this.async.transform(this.placeHolderData).title;
      this.body = this.async.transform(this.placeHolderData).body;
    } else if (!this.async.transform(this.placeHolderData) && this.activeRoute.snapshot.params?.id) {
      this.getData(this.activeRoute.snapshot.params.id);
    }
  }

  getData(placeHolderId: string): void {
    this.homeHttpApi.getDataById(placeHolderId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res: IPLaceHolderAnswer) => {
          this.title = res.title;
          this.body = res.body;
        },
        err => {
          this.notificationService.checkError(err);
          this.router.navigate([``]).then(() => { });
        }
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
