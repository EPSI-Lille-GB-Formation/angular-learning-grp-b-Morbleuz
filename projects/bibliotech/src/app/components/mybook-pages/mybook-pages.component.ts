import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { Utils } from '../../utils';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { PageService } from '../../service/page.service';
import { Page } from '../../models/page';

@Component({
  selector: 'app-mybook-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mybook-pages.component.html',
  styleUrl: './mybook-pages.component.css'
})
export class MybookPagesComponent {
  public isLoad = false;
  public pages : Page[] = [];
  public id : any;

  constructor(
    public pageService : PageService,
    public toastService : NgToastService,
    public router : Router,
    private route : ActivatedRoute,

  ){

  }

  goToPage(idPage : number){
    this.router.navigateByUrl("mybooks/"+this.id+'/pages'+idPage);
  }
  ngOnInit(){
    //Message d'erreur + retour à la home page
    if(!Utils.isAuth()){
      Utils.openError(this.toastService,"Vous n'avez pas les permissions pour accéder à cette page");
      this.router.navigateByUrl('/')
    }
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.pageService.getAll().subscribe(
        pages => {
          for(let page of pages){
            if(page.bookId == this.id){
              this.pages.push(page);
            }
          }
          this.isLoad = true;
        }
      )
    })

  }


  deleteBook(id : number){
    this.pageService.delete(id).subscribe(
      result => {
        this.pageService.getAll().subscribe(
          pages => {
            Utils.openSuccess(this.toastService,"Suppresion de la page : " + id);
            this.pages = pages;
            this.isLoad = true;
          }
        )
      }
    )
  }
  
}
