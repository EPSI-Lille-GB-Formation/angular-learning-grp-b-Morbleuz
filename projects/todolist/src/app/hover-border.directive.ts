import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hover-border]',
  standalone: true
})
export class HoverBorderDirective {

  
  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseHover(){
    this.el.nativeElement.style.border = '2px solid blue';
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.el.nativeElement.style.border = '';
  }

}
