import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/users';
import { NgToastService } from 'ng-angular-popup';
import { Utils } from '../../utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-user.component.html',
  styleUrls: [
    './admin-user.component.css',
    '../../app.component.css'
  ]
})
export class AdminUserComponent {
  public isLoad = false;
  public users : undefined | User[];

  constructor(
    public userService : UserService,
    public toastService : NgToastService,
    public router : Router
  ){

  }
  ngOnInit(){
    //Message d'erreur + retour à la home page
    if(!Utils.isAdmin()){
      Utils.openError(this.toastService,"Vous n'avez pas les permissions pour accéder à cette page");
      this.router.navigateByUrl('/')
    }
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.isLoad = true;
      }
    )
  }


  deleteUser(id : number){
    this.userService.delete(id).subscribe(
      result => {
        this.userService.getUsers().subscribe(
          users => {
            Utils.openSuccess(this.toastService,"Suppresion pour l'utilisateur " + id + " réussie")
            this.users = users;
            this.isLoad = true;
          }
        )
      }
    )
  }
}
