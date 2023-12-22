import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[no-open]',
  standalone: true
})
export class NoOpenDirective {

  constructor() {
    console.log('hellow')
   }

  @HostListener('click')
  onClick(){
    return false;
  }

}
