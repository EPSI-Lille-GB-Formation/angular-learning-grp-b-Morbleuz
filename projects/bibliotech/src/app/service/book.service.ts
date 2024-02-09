import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url : string = 'api/books';

  constructor(
    private http : HttpClient
  ) { }

  post(book : Book){
    return this.http.post<Book>(this.url,book);
  }

  getAll(){
    return this.http.get<Book[]>(this.url);
  }

  get(id : number) : Observable<Book>{
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  update(book : Book) : Observable<Book>{
    return this.http.put<any>(`${this.url}/${book.id}`, book)
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
