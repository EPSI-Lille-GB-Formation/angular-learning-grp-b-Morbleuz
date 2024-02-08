import { NgToastService } from "ng-angular-popup";

export abstract class Utils{
    static isAuth(){
        let id = localStorage.getItem('currentUser');
        if(id != null){
            return true;
        }
        return false;
    }

    static isAdmin() : boolean{
        let user = localStorage.getItem('currentUser');
        console.log(user);
        if(user){
            return JSON.parse(user)['role'].includes("ROLE_ADMIN")
        }
        return false;
    }
    static getId() : number | null{
        let user = localStorage.getItem('currentUser');
        console.log(user);
        if(user){
            return JSON.parse(user)['id'];
        }
        return null;
    }

    static authenticate(user : any){
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    static getInformationUser(){
        if(localStorage.getItem('currentUser')){
            let user : string = localStorage.getItem('currentUser')!
            return JSON.parse(user)
        }
        return null
    }
    static openSuccess(toastService : NgToastService,message:string){
        toastService.success({detail:"Succès",summary:message, sticky:false, position:"bottomRight", duration: 5000})
    }
    static openError(toastService : NgToastService,message:string){
        toastService.error({detail:"Erreur",summary:message, sticky:false, position:"bottomRight", duration: 5000})
    }

    static disconnect(){
        localStorage.clear()
    }

}