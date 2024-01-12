import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from '../mock-todo';
import { HoverBorderDirective } from '../hover-border.directive';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoComponent,HoverBorderDirective],
  template : `
  <main class="container">
  <h1>Liste des choses à faire</h1>
  <h3>Voici la liste de toute les tâches :     
    <span [ngSwitch]="showIsCompleted">
        <div *ngSwitchCase="true">Terminé</div>
        <div *ngSwitchCase="false">À faire</div>
        <div *ngSwitchCase="undefined">Toutes</div>
    </span>
</h3>
  <a href="#" (click)="changeTodolist(false)" role="button">A faire</a>
  <a href="#" (click)="changeTodolist(true)" role="button">Terminé</a>
  <ng-container *ngFor="let t of this.todolist">
    <app-todo *ngIf="showIsCompleted == undefined || showIsCompleted==t.isCompleted" [value]="t"/>
  </ng-container>
  </main>
  
  `,
  styles : [
    `
    a {
      margin-left:10px
    }
    `
  ]

})
export class TodoListComponent {

  todolist = TODOS;

  showIsCompleted : boolean | undefined = undefined;

  constructor(){
    console.table(this.todolist);
  }

  changeTodolist(bool:boolean){
    if(this.showIsCompleted!=bool){
      this.showIsCompleted = bool;
      console.log("Affichage de la liste à l'état isCompleted = " + this.showIsCompleted)
    }else{
      console.log("Affichage de toute la liste")
      this.showIsCompleted=undefined;
    }
    console.log(this.showIsCompleted)
  }
  
}
