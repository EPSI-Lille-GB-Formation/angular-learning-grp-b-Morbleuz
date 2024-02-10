import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url : string = 'api/categories';

  constructor(
    private http : HttpClient
  ) { }

  post(category : Categories){
    return this.http.post<Categories>(this.url,category);
  }

  getAll(){
    return this.http.get<any>(this.url);
  }

  get(id : number) : Observable<Categories>{
    return this.http.get<Categories>(`${this.url}/${id}`);
  }

  update(category : Categories) : Observable<Categories>{
    return this.http.put<any>(`${this.url}/${category.id}`, category)
  }

  delete(id : number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
