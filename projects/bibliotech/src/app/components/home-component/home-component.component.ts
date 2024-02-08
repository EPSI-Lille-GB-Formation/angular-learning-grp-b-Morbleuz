import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';

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
    private bookService : BookService
  ){}

  ngOnInit() {
    this.bookService.get().subscribe(
      books => {this.books = books;this.isLoad=true}
    )
  }
}
