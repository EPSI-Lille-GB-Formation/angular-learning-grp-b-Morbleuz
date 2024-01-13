import { Book } from "./book";

export class Categories{
    constructor(
        public id: number,
        public label : string,
        public books : Book[] = []
    ){
    }
}