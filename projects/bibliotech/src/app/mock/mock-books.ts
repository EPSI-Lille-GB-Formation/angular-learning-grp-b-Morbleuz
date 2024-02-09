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
        createdAt : new Date('22-10-2003'),
        updateAt : new Date('25-12-2004'),
        categoriesId : [1],
        usersId : [1],
        pagesId : [1,2]
    }
]