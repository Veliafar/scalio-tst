import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import { stringNullUndefined } from '@shared/models/types';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent {

  @Input() header: stringNullUndefined = '';
  @Input() backButton = false;

  constructor(
    private location: Location
  ) {
  }

  goBack(): void {
    this.location.back();
  }
}
