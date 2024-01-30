export abstract class Utils{
    static isAuth(){
        let id = localStorage.getItem('id');
        if(id != null){
            return true;
        }
        return false;
    }

    static authenticate(id : string){
        localStorage.setItem("id",id)
    }

}