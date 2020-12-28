import {Injectable} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private notification: NzNotificationService
  ) {
  }

  checkError(err: HttpErrorResponse): void {
    console.log(err.status.toString().charAt(0));
    if (err.status.toString().charAt(0) === '4') {
      this.warningErrorPopUp(err);
    } else if (err.status.toString().charAt(0) === '5') {
      this.serverErrorPopUp(err);
    }
  }

  serverErrorPopUp(error: HttpErrorResponse): void {
    this.notification.blank(
      'Server error',
      ((error.message ? error.message : '')),
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-10%',
          border: '3px solid red'
        },
        nzClass: 'scl-notification'
      }
    );
  }

  warningErrorPopUp(error: HttpErrorResponse): void {
    this.notification.blank(
      'Request error',
      (`try id less than 101 <br> ${(error.message ? error.message : '')}`
      ),
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-10%',
          border: '3px solid yellow'
        },
        nzClass: 'scl-notification'
      }
    );
  }

  warningPopUp(message: string): void {
    this.notification.blank(
      'Data error',
      message,
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-10%',
          border: '3px solid yellow'
        },
        nzClass: 'scl-notification'
      }
    );
  }
}
