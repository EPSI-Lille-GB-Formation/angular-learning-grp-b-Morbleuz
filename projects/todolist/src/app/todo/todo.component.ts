import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { HoverBorderDirective } from '../hover-border.directive';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoComponent,HoverBorderDirective],
  template: `
  <article hover-border>
        <label><input type="checkbox" [checked]="todo!.isCompleted" (click)="changeState()">{{todo!.content}}
        <div class="option">
          <a href="">Edit</a>
          <a (click)="this.delete()">Delete</a>
        </div>
      </label>
  </article> 
  `
})
export class TodoComponent {
  
  @Input('value') 
  todo : Todo | undefined;

  changeState(){
    if(this.todo?.isCompleted == true){
      this.todo.isCompleted = false;
    }else if(this.todo?.isCompleted == false){
      this.todo.isCompleted = true;
    }
  }

  delete(){
    console.log("sup")
    if (this.todo) {
      TODOS.splice(TODOS.indexOf((this.todo),1));
      console.log("suppresion ok ")
      console.table(TODOS)
    }
  }
}
