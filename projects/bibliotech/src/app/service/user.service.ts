import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';

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
}
