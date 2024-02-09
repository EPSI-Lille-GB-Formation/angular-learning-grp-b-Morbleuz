import { Categories } from "./categories";
import { Page } from "./page";
import { User } from "./users";

export class Book{
    constructor(
        public id: number,
        public title:string,
        public resume : string,
        public image : string,
        public createdAt : Date,
        public updateAt : Date,
        public categoriesId : number[],
        public usersId : number[],
        public pagesId : number[]
    ){
        this.createdAt = new Date()
    }
}