import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import {DetailsComponent} from './components/details/details.component';
import {DetailsRoutingModule} from '@app/modules/details/details-routing.module';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DetailsRoutingModule
  ],
  providers: [
    AsyncPipe
  ]
})
export class DetailsModule {
}
