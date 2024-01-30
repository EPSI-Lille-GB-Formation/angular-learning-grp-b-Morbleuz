import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Utils } from '../../utils';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  constructor(
    private userService : UserService
  ){
    
  }

  @Input() 
  email : string = "";
  @Input() 
  password : string = "";
  

  onLogin(){
    console.log("qdza")
    this.userService.getUsers().pipe().subscribe(
      users => {
        for(let u of users){
          if(u["email"] == this.email && u["password"] == this.password){
            Utils.authenticate(u["id"])
            console.log("authentication success !")
          }
        }
        console.log("Echec de l'authentification")
      }
    )
  }
}
