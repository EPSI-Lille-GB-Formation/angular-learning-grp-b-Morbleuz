import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url : string = 'api/books';

  constructor(
    private http : HttpClient
  ) { }

  post(book : Book){
    return this.http.post<any>(this.url,book);
  }

  get(){
    return this.http.get<any>(`${this.url}`);
  }
}
