import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { Utils } from '../../utils';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mybook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mybook.component.html',
  styleUrls: [
    './mybook.component.css',
    '../../app.component.css'
  ]
  
})
export class MybookComponent {
  public isLoad = false;
  public books : Book[] = [];

  constructor(
    public userService : UserService,
    public bookService : BookService,
    public toastService : NgToastService,
    public router : Router
  ){

  }
  ngOnInit(){
    //Message d'erreur + retour à la home page
    if(!Utils.isAuth()){
      Utils.openError(this.toastService,"Vous n'avez pas les permissions pour accéder à cette page");
      this.router.navigateByUrl('/')
    }
    this.bookService.getAll().subscribe(
      books => {
        let id = Utils.getId();
        if(id){
          console.log(id)
          for(let book of books){
            if(book.usersId.includes(id)){
              this.books.push(book);
            }
          }
        }
        this.isLoad = true;
      }
    )
  }


  deleteBook(id : number){
    this.bookService.delete(id).subscribe(
      result => {
        this.bookService.getAll().subscribe(
          books => {
            Utils.openSuccess(this.toastService,"Suppresion pour du livre : " + id);
            this.books = books;
            this.isLoad = true;
          }
        )
      }
    )
  }
  
}
