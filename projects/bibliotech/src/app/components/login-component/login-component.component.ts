import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Utils } from '../../utils';
import { NgToastService } from 'ng-angular-popup';
import {Router} from "@angular/router"
import { AuthService } from '../../service/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  constructor(
    private userService : UserService,
    private toastService : NgToastService,
    private authService : AuthService,
    private router: Router
  ){
    
  }

  @Input() 
  email : string = "";
  @Input() 
  password : string = "";
  

  onLogin(){
    console.log("qdza")
    this.userService.getUsers().pipe().subscribe(
      users => {
        let isInDatabase = false;
        for(let u of users){
          if(u["email"] == this.email && u["password"] == this.password){
            Utils.authenticate(u)
            isInDatabase = true;
            this.authService.isLoggedIn = true;
            Utils.openSuccess(this.toastService,'Authentification au compte réussi !')
            this.router.navigate(['/'])
          }
        }
        if(!isInDatabase){
          Utils.openError(this.toastService,'Échec de l\'authentification')
          
        }
      }
    )
  }
}
