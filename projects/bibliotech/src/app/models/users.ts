import { Book } from "./book";

export class User{
    constructor(
        public id: number,
        public firstname:string,
        public lastname : string,
        public email : string,
        public password : string,
        public role : string[] = ["ROLE_USER"],
        public books : Book[] = []
    ){
    }
}