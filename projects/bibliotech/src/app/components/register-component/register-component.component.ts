import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/users';
import { tap } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';
import { Utils } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {
  constructor(
    private userService : UserService,
    private toastService : NgToastService,
    private router: Router
  ){
  }

  @Input() 
  email : string = "";

  @Input() 
  validEmail : string = "";
  
  @Input() 
  firstname : string = "";
  @Input() 
  validFirstname : string = "";

  @Input() 
  lastname : string = "";
  @Input() 
  validLastname : string = "";

  @Input() 
  password : string = "";
  @Input() 
  validPassword : string = "";

  @Input() 
  confirmPassword : string = "";
  @Input() 
  validConfirmPassword : string = "";

  regPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')

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

  checkValidPassword(newValue : string){
    this.password = newValue;
    if(this.password.match(this.regPassword)){
      this.validPassword = "false"
    }else{
      this.validPassword = "true"
    }
  }

  checkValidConfirmPassword(newValue : string){
    this.confirmPassword = newValue;
    if(this.password != this.confirmPassword){
      this.validConfirmPassword = "false"
    }else{
      this.validConfirmPassword = "true"
    }
  }
  formIsValid(){
    if(this.password != this.confirmPassword ){
      this.validPassword = "true"
      Utils.openError(this.toastService,"Les mots de passe sont différent")
      return false;
    }
    return true;
  }

  async registerUser(){
    if(this.formIsValid()){
      let lastIncrement = 0;
      this.userService.getUsers().pipe().subscribe(
        users => {
          lastIncrement = this.getLastIncrement(users)
          let user : User = new User(lastIncrement,this.firstname,this.lastname,this.email,this.password)
          this.userService.postUser(user).subscribe(
            {
              next : data => {
               Utils.openSuccess(this.toastService,'Création de compte ok');
                this.router.navigate(['/login'])

              },
              error : error => console.log(error)
            }
          )
        }
      )
    }
    
    
  }
}
