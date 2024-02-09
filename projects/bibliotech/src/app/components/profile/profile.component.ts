import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Utils } from '../../utils';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../../models/users';
import { last } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(
    private userService : UserService,
    private router: Router,
    private toastService : NgToastService,
  ){

  }

  @Input()
  public firstname = "";
  @Input()
  public lastname = "";

  public user : undefined | User = undefined;
  
  ngOnInit() {
    let id = Utils.getId();
    if(id == null){
      Utils.openError(this.toastService,"Vous devez être connecté pour accéder à la page")
      this.router.navigate(['/login'])
    }else{
      this.userService.getUser(id).subscribe(
        user => {
          this.user = user;
          this.firstname = user["firstname"];
          this.lastname = user["lastname"];
        }
      )
    }
    
    
  }
  updateProfil(){
    if(this.user){
      let id = this.user.id;
      this.user.firstname = this.firstname;
      this.user.lastname = this.lastname;
      this.userService.update(this.user).subscribe(
        {
          next : (result) => {
            this.userService.getUser(id).subscribe(
              user => {
                Utils.openSuccess(this.toastService,"Modification correctement effectué")
                this.user = user;
                this.firstname = user["firstname"];
                this.lastname = user["lastname"];
              }
            )
          },
          error : (err) => {
            console.error(err);
          }
        }
      )

    }
  }
}
