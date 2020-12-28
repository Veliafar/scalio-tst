import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[regFormat]'
})

export class RegFormatDirective {
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Ctrl',
    'F11',
    'F12'
  ];

  @Input() regFormat: string | RegExp;
  @Input() regPasteFormat: string | RegExp;

  @Input() ngModel: string;
  @Output() ngModelChange = new EventEmitter<string>();

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.key) !== -1 || event.ctrlKey) {
      return;
    }

    let regex: RegExp;
    if (this.regFormat) {
      regex = new RegExp(this.regFormat);
    } else {
      console.warn('RegFormatDirective: regExp is null');
      return;
    }

    let next = '';

    let element;
    element = this.el.nativeElement;

    const position = element?.selectionEnd;
    const current: string = element?.value?.replace(' ', '');

    if (current?.length > 0) {
      next = [
        current.slice(0, position),
        event.key,
        current.slice(position)
      ].join('');
    } else {
      next = current.concat(event.key);
    }
    if (next && !String(next).match(regex)) {
      event.preventDefault();
    }
  }

  constructor(
    private el: ElementRef
  ) {
  }
}
