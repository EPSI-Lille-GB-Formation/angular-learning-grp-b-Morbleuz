import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl : string = 'api/users';

  constructor(
    private http : HttpClient
  ) { }

  postUser(user : User){
    return this.http.post<any>(this.userUrl,user);
  }

  getUsers(){
    return this.http.get<any>(this.userUrl);
  }

  getUser(id : number) : Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  update(user : User) : Observable<User>{
    return this.http.put<any>(`${this.userUrl}/${user.id}`, user)
  }

  delete(id : number) {
    return this.http.delete(`${this.userUrl}/${id}`);
  }
}
