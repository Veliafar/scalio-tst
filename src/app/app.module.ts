import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {OverlayModule} from '@angular/cdk/overlay';
import {NzModalService} from 'ng-zorro-antd/modal';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NZ_I18N, ru_RU} from 'ng-zorro-antd/i18n';

const NG_ZORRO_SERVICES = [
  NzModalService,
  NzNotificationService
];

const ANGULAR = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AppRoutingModule,
  OverlayModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...ANGULAR
  ],
  providers: [
    ...NG_ZORRO_SERVICES,
    {provide: LOCALE_ID, useValue: 'ru-RU'},
    {provide: NZ_I18N, useValue: ru_RU},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
