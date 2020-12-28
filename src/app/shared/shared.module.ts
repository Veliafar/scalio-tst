import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {RegFormatDirective} from '@core/directives/reg-format.directive';
import {NzNotificationModule} from 'ng-zorro-antd/notification';

const COMPONENTS = [
  WrapperComponent
];

const DIRECTIVES = [
  RegFormatDirective
];

const NG_ZORRO = [
  NzNotificationModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    ...NG_ZORRO
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule {
}
