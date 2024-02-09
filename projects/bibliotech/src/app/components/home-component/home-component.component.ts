import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  isLoad = false;

  public books : Book[] = [];

  public filter : string = ""
  constructor(
    private bookService : BookService,
    private router : Router
  ){}

  ngOnInit() {
    this.bookService.getAll().subscribe(
      books => {this.books = books;this.isLoad=true}
    )
  }

  goToBook(id : number){
    this.router.navigate(['/book',id]);
  }
}
