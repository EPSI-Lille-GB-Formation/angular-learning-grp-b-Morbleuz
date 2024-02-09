import { Component } from '@angular/core';
import { Utils } from '../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book';
import { PageService } from '../../service/page.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  public id : any;
  public book : undefined | Book;
  constructor(
    private router : Router,
    private toastService : NgToastService,
    private route : ActivatedRoute,
    private bookService : BookService,
    private pageService : PageService
  ){}

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
          console.table(book);
        }
      )

      
    })
  }
}
