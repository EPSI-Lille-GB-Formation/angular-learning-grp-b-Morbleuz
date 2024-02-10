import { Book } from "../models/book";
import { CATEGORIES } from "./mock-categories";
import { PAGES } from "./mock-pages";
import { USERS } from "./mock-users";

export const BOOKS : Book[] = [
    {
        id: 1,
        title:"Livre 1",
        resume : "Mon super résumé",
        image : "/folder",
        createdAt : new Date(2003,10,22),
        updateAt : null,
        categoriesId : [1],
        usersId : [1,2],
        pagesId : [1,2,3,4,5,6]
    }
]