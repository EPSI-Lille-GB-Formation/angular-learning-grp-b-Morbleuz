import { Book } from "./book";

export class User{
    constructor(
        public id: number,
        public firstname:string,
        public lastname : string,
        public email : string,
        public password : Date|null,
        public role : Date,
        public books : Book[]
    ){
    }
}