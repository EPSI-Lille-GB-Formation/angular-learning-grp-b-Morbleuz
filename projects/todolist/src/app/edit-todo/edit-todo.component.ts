import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';  
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <main class="container">
    <a id="loading"  *ngIf="loading" href="#" aria-busy="true">Récupération de la tâche…</a>
    <div *ngIf="!loading" >
      <a (click)="this.goToHomePage()">Page d'accueil</a>
      <h1>Edition de la tâche n° {{this.todo?.id}} </h1>
          <label for="title">
          Titre : 
          <input type="text" id="title" name="title" placeholder="Titre" value="{{this.todo?.title}}">
          </label>
          <label for="content">
          Contenue : 
          <input type="text" id="content" name="lastname" placeholder="Last name" value="{{this.todo?.content}}">
          </label>
          <button (click)="changeValueTodo()">Enregistrer les informations</button>
    </div>
    
  </main>
  `,
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
  constructor(
    private route:ActivatedRoute,
    private todoService : TodoService,
    private toastService : NgToastService,
    private router : Router
    ){}
  id: number | undefined;
  @Input() todo : Todo | undefined = undefined;
  loading : boolean = true;
  ngOnInit(){
      this.id = this.route.snapshot.params['id'];
      if(this.id){
        this.todoService.getTodoById(this.id).subscribe(
          {
            next : todo => this.todo = todo,
            complete : () => this.loading = false
          })
      }
  }
  goToHomePage(){
    this.router.navigate(['']);
  }
  openSuccess(){
    this.toastService.success({detail:"Succès",summary:"Succès de la modification !", sticky:false, position:"bottomRight", duration: 3000})
  }

  changeValueTodo() : void{
    var content : string = (<HTMLInputElement>document.getElementById('content')).value;
    var title = (<HTMLInputElement>document.getElementById('title')).value;
    
    console.log(content)
    if(this.todo && this.id){
      this.todo.content = content
      this.todo.title = title
      this.todoService.putTodo(this.todo,this.id).subscribe(
        {
         next : data => this.openSuccess(),
         error: error => {
             console.error('There was an error!', error);
         }
        }
     )
    }
  }



}
