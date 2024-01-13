import { Book } from "./book";

export class Page{
    constructor(
        public id: number,
        public title:string,
        public createdAt : Date,
        public updateAt : Date|null,
        public book : Book
    ){
        this.createdAt = new Date()
    }
}