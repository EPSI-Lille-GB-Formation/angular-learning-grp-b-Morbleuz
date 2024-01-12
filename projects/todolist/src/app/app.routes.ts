import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './task/task.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [
    {path : '', component : TodoListComponent},
    {path : 'task/:id', component : TaskComponent},
    {path : 'edit/:id', component : EditTodoComponent},
    {path : 'create', component : CreateTaskComponent},


]
