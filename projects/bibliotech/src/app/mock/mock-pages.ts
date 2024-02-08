import { Page } from "../models/page";
import { BOOKS } from "./mock-books";

export const PAGES : Page[] = [
    {
        id: 1,
        title : "title",
        content : 'content',
        createdAt : new Date('22-10-2003'),
        updateAt : null ,
        book : BOOKS[0]
    },
    {
        id: 2,
        title : "title",
        content : 'content',
        createdAt : new Date('22-10-2003'),
        updateAt : null ,
        book : BOOKS[0]
    },
    {
        id: 3,
        title : "title",
        content : 'content',
        createdAt : new Date('22-10-2003'),
        updateAt : null ,
        book : BOOKS[0]
    },
]