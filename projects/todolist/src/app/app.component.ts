import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';
import { HoverBorderDirective } from './hover-border.directive';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HoverBorderDirective,TodoListComponent],
  template : `
  <app-todolist/>
  `,
  styles : []

})
export class AppComponent {

  todolist = TODOS;

  constructor(){
    console.table(this.todolist);
  }

  selectTodo(id : number){
    return this.todolist[id].id
  }

  selectTodoFalse(){
    return this.todolist.filter(t => !t.isCompleted)
  }
  
}
