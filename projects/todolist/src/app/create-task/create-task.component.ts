import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  template : `
    <main class="container">
    <div >
      <a href="/">Retour</a>
      <h1>Création d'une nouvelle tâche </h1>
          <label for="title">
          Titre : 
          <input type="text" id="title" name="title" placeholder="Titre">
          </label>
          <label for="content">
          Contenu : 
          <input type="text" id="content" name="content" placeholder="Contenu">
          </label>
          <button (click)="createTask()">Enregistrer les informations</button>
    </div>
    
  </main>
  `
})
export class CreateTaskComponent {

  constructor(private route:ActivatedRoute,private todoService : TodoService,private toastService : NgToastService){

  }

  openSuccess(message:string){
    this.toastService.success({detail:"Succès",summary:message, sticky:false, position:"bottomRight", duration: 5000})
  }

  openError(message:string){
    this.toastService.error({detail:"Impossible de créer la tâche",summary:message, sticky:false, position:"bottomRight", duration: 5000})
  }

  createTask() : void{
    var content : string = (<HTMLInputElement>document.getElementById('content')).value;
    var title = (<HTMLInputElement>document.getElementById('title')).value;

    if(content == "" || title == ""){
      this.openError("Les champs ne doivent pas être vide")
      return;
    }
    var todo = new Todo(999,title,content,"user",false,new Date(),null);
    this.todoService.postTodo(todo).subscribe(data => console.log(data));
    this.openSuccess("Création de la tâche avec succès ! (voir log)")

  }
}
