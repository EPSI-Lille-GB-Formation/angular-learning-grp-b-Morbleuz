import { Component } from '@angular/core';
import { Utils } from '../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book';
import { PageService } from '../../service/page.service';
import { Page } from '../../models/page';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: [
    './book.component.css',
    '../../app.component.css'
  ]
})
export class BookComponent {
  isLoad = false;
  public id : any;
  public book : undefined | Book;
  public pages : Page[] = [];
  public selectPage : Page | undefined;
  public pageNumber : number = 0;

  constructor(
    private router : Router,
    private toastService : NgToastService,
    private route : ActivatedRoute,
    private bookService : BookService,
    private pageService : PageService
  ){}

  previousPage(){
    this.pageNumber--;
    this.selectPage = this.pages[this.pageNumber];
  }

  nextPage(){
    this.pageNumber++;
    this.selectPage = this.pages[this.pageNumber];
  }
  ngOnInit(){
    if(!Utils.isAuth()){
      Utils.openError(this.toastService, "Il faut être authentifié pour accéder à cette page");
      this.router.navigateByUrl('/');
    }
    this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log('id du livre => ', this.id);
      this.bookService.get(this.id).subscribe(
        book => {
          this.book = book;
          for(let idPage of book.pagesId){
            this.pageService.get(idPage).subscribe(
              page => {
                this.pages.push(page);
                this.selectPage = this.pages[this.pageNumber];
                console.log(this.selectPage);
                this.isLoad = true;
              }
            )
          }
        }
      )
    })
  }
}
