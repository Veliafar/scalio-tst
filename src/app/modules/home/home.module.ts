import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {DataIdFormComponent} from './components/data-id-form/data-id-form.component';
import {HomeRoutingModule} from './home-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared/shared.module';

const COMPONENTS = [
  HomeComponent,
  DataIdFormComponent
];

const ANGULAR = [
  CommonModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...ANGULAR,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
