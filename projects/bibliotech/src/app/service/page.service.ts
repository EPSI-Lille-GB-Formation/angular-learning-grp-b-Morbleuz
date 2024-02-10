import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../models/page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  url : string = 'api/pages';

  constructor(
    private http : HttpClient
  ) { }

  post(page : Page){
    return this.http.post<Page>(this.url,page);
  }

  getAll(){
    return this.http.get<Page[]>(this.url);
  }

  get(id : number) : Observable<Page>{
    return this.http.get<Page>(`${this.url}/${id}`);
  }

  update(page : Page) : Observable<Page>{
    return this.http.put<any>(`${this.url}/${page.id}`, page)
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
