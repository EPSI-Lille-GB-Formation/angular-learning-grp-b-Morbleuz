import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template : `
  <h1>Liste des choses à faire</h1>
  <ul >
    <li *ngFor="let t of selectTodoFalse()">
      <article>
        <input type="checkbox">{{t.content}}
      </article>
    </li>
    
  </ul>  
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
