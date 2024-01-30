import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/users';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {
  constructor(
    private userService : UserService
  ){
  }

  @Input() 
  email : string = "";
  @Input() 
  firstname : string = "";
  @Input() 
  lastname : string = "";
  @Input() 
  password : string = "";
  @Input() 
  confirmPassword : string = "";

  getLastIncrement(users : []){
    let min = 0;
    for(let u of users){
      if(u["id"] > min){
        min = u["id"]
      }
    }
    min++;
    return min;
  }
  async registerUser(){
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
    let lastIncrement = 0;
    this.userService.getUsers().pipe().subscribe(
      users => {
        lastIncrement = this.getLastIncrement(users)
        let user : User = new User(lastIncrement,this.firstname,this.lastname,this.email,this.password)
        this.userService.postUser(user).subscribe(
          {
            next : data => {
              console.log('next',data)
            },
            error : error => console.log(error)
          }
        )
      }
    )
    
  }
}
