import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { HoverBorderDirective } from '../hover-border.directive';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoComponent,HoverBorderDirective],
  template: `
  <article hover-border>
        <label><input type="checkbox" [checked]="todo!.isCompleted">{{todo!.content}}
        <div class="option">
          <a href="">Edit</a>
          <a href="">Delete</a>
        </div>
      </label>
  </article> 
  `
})
export class TodoComponent {
  
  @Input('value') 
  todo : Todo | undefined;

}
