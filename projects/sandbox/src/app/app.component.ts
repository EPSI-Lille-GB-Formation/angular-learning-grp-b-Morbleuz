import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template : `
  <h1>Bienvenue dans la sandbox</h1>
  `,
  styles : []
})
export class AppComponent {
  title = 'sandbox';
}
