import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <main class="container">
      <h1>Vous avez cliqué sur la tâche : {{this.id}}</h1>
    </main>
  `,
  styles : ``
})
export class TaskComponent {

  constructor(private route:ActivatedRoute){}

  id: number | undefined;
  
  ngOnInit(){
      this.id = this.route.snapshot.params['id'];
  }
}
