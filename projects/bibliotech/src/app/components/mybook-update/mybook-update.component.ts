import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BookService } from '../../service/book.service';
import { Book } from '../../models/book';
import { Utils } from '../../utils';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mybook-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mybook-update.component.html',
  styleUrl: './mybook-update.component.css'
})
export class MybookUpdateComponent {
  public isLoad = false;
  public id : any;
  public book : undefined | Book;

  @Input()
  public title :string = "";

  @Input()
  public resume :string = "";

  constructor(
    public toastService : NgToastService,
    public router : Router,
    public bookService : BookService,
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
      this.bookService.get(this.id).subscribe(
        book => {
          this.book = book;
          this.isLoad = true;
          this.title = this.book.title;
          this.resume = this.book.resume;
        }
      )
    })
  }

  goToPages(){
    this.router.navigateByUrl("/mybooks/"+this.id+"/pages");
  }
  updateBook(){
    if(this.book){
      this.book.title = this.title;
      this.book.resume = this.resume;
      this.book.updateAt = new Date();
      this.bookService.update(this.book).subscribe(
        {
          next : (result) => {
            this.bookService.get(this.id).subscribe(
             book => {
                Utils.openSuccess(this.toastService,"Modification correctement effectué")
                this.book = book;
                this.title = this.book.title
                this.resume = this.book.resume
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