import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api"
import { TODOS } from './mock-todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    console.log("qzd")
    const todos = TODOS;
    return {todos};
    // Requête API : api/todos
  }
}
