import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @Input('bg-color')
  bgHighlightColor:string = 'yellow'

  @Input('bg-default')
  bgDefault:string = 'transparent'


  @HostBinding('style.background')
  bgcolor = this.bgDefault

  constructor() { 
  }

  ngOnInit() {
    this.bgcolor = this.bgDefault
  }
  
  @HostListener('mouseenter')
  onMouseEnter(){
    this.bgcolor = this.bgHighlightColor
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.bgcolor = this.bgDefault
  }
}