import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/users';
import { NgToastService } from 'ng-angular-popup';
import { Utils } from '../../utils';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Categories } from '../../models/categories';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-category.component.html',
  styleUrls: [
    './admin-category.component.css',
    '../../app.component.css'
  ]
})
export class AdminCategoryComponent {
  public isLoad = false;
  public categories : undefined | Categories[];

  @Input()
  public label = "azdazd";

  constructor(
    public categoryService : CategoryService,
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
    this.categoryService.getAll().subscribe(
      category => {
        this.categories = category;
        this.isLoad = true;
      }
    )
  }

  createNewCategory(){
    this.isLoad = false;
    let max = 0;
    this.categoryService.getAll().subscribe(
      catories => {
        for(let c of catories){
          if(c.id > max){
            max = c.id
          }
        }
        console.log(this.label)
        let newCat = new Categories(max,this.label,[]);
        console.table(newCat);
        this.categoryService.post(newCat).subscribe(
          categories => {
            this.categoryService.getAll().subscribe(
              category => {
                Utils.openSuccess(this.toastService,"Ajout correcment effectué")
                this.categories = category;
                this.isLoad = true;
              }
            )
          }
        )
      }
    )
  }
  goToCategory(id : number){
    this.router.navigate(['/admin/category',id]);
  }

  deleteUser(id : number){
    this.categoryService.delete(id).subscribe(
      category => {
        this.categoryService.getAll().subscribe(
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
