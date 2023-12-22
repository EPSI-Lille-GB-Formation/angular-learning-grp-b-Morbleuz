import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { NoOpenDirective } from './no-open.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective,NoOpenDirective],
  template : `
  <h1>Découverte des directives d'attributs</h1>

  <a no-open href="https://x.com">X.com no-open</a><br/>
  <a href="https://x.com">X.com</a>

  <p highlight bg-color="blue" bg-default="orange">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officiis facere corporis hic! Reprehenderit ipsum voluptatum, 
    obcaecati quis veniam sapiente? Architecto sequi inventore ex assumenda nostrum ea nobis esse saepe neque!
  </p>
  <p highlight> 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Alias non ad nihil sapiente autem facilis iusto assumenda dignissimos illum sed fuga, 
    minima nesciunt consectetur officia adipisci eligendi sint ratione laboriosam!
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Eos illum quis velit fugiat perferendis nostrum temporibus id, 
    voluptate harum debitis sapiente aliquid officia vitae labore mollitia quia ex, maxime consequuntur?
  </p>
  `,
  styles : []
})
export class AppComponent {
  title = 'sandbox';
}
