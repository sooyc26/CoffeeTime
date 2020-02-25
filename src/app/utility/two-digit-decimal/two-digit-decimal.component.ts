// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-two-digit-decimal',
//   templateUrl: './two-digit-decimal.component.html',
//   styleUrls: ['./two-digit-decimal.component.css']
// })
// export class TwoDigitDecimalComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appTwoDigitDecimalNumber]',
})
export class TwoDigitDecimalComponent {
  private regex: RegExp = new RegExp(/^\d+[.,]?\d{0,2}$/g);// user can put . or , char.
// input also cannot start from , or .
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.includes(event.key)) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}