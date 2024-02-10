import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/users';
import { NgToastService } from 'ng-angular-popup';
import { Utils } from '../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Categories } from '../../models/categories';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-update-category.component.html',
  styleUrls: [
    './admin-update-category.component.css',
    '../../app.component.css'
  ]
})
export class AdminUpdateCategoryComponent {
  public isLoad = false;
  public id : any;
  public categories : undefined | Categories;

  @Input()
  public label :string = "";

  constructor(
    public category : CategoryService,
    public toastService : NgToastService,
    public router : Router,
    public categoryService : CategoryService,
    private route : ActivatedRoute,
  ){

  }
  ngOnInit(){
    //Message d'erreur + retour à la home page
    if(!Utils.isAdmin()){
      Utils.openError(this.toastService,"Vous n'avez pas les permissions pour accéder à cette page");
      this.router.navigateByUrl('/')
    }
    this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log('id du livre => ', this.id);
      this.categoryService.get(this.id).subscribe(
        category => {
          this.categories = category;
          this.isLoad = true;
          this.label = this.categories.label;
        }
      )
    })
  }

  updateCategories(){
    if(this.categories){
      this.categories.label = this.label;
      this.categoryService.update(this.categories).subscribe(
        {
          next : (result) => {
            this.categoryService.get(this.id).subscribe(
             categories => {
                Utils.openSuccess(this.toastService,"Modification correctement effectué")
                this.categories = categories;
                this.label = this.categories.label
              }
            )
          },
          error : (err) => {
            console.error(err);
          }
        }
      )
    }


    }
  }