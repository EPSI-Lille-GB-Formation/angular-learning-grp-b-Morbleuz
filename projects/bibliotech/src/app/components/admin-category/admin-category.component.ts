import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/users';
import { NgToastService } from 'ng-angular-popup';
import { Utils } from '../../utils';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Categories } from '../../models/categories';
@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-category.component.html',
  styleUrls: [
    './admin-category.component.css',
    '../../app.component.css'
  ]
})
export class AdminCategoryComponent {
  public isLoad = false;
  public categories : undefined | Categories[];

  constructor(
    public category : CategoryService,
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
    this.category.getAll().subscribe(
      category => {
        this.categories = category;
        this.isLoad = true;
      }
    )
  }


  deleteUser(id : number){
    this.category.delete(id).subscribe(
      category => {
        this.category.getAll().subscribe(
          category => {
            Utils.openSuccess(this.toastService,"Suppresion pour la catégories : " + id + " réussie")
            this.categories = category;
            this.isLoad = true;
          }
        )
      }
    )
  }


}
