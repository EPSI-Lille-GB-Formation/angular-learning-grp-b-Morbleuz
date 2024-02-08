import { Categories } from "./categories";
import { User } from "./users";

export class Book{
    constructor(
        public id: number,
        public title:string,
        public resume : string,
        public image : string,
        public createdAt : Date,
        public updateAt : Date,
        public categories : Categories[],
        public users : User[]
    ){
        this.createdAt = new Date()
    }
}