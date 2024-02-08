import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Utils } from './utils';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import {Router} from "@angular/router"
import { AuthService } from './service/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    NgToastModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public isAuth = false;
  public isAdmin = false;
  constructor(
    private router: Router,
    private toastService : NgToastService,
    private authService : AuthService
  ){

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isAuth = Utils.isAuth()
        this.isAdmin = Utils.isAdmin();
      }
    })

  }

  disconnect(){
    Utils.disconnect();
    this.isAuth = Utils.isAuth();
    this.isAdmin = Utils.isAdmin();
    Utils.openSuccess(this.toastService,'Déconnexion réussie')
    this.router.navigateByUrl('/')
  }
  
}
