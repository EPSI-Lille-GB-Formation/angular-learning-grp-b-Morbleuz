import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from './mock/mock-users';
import { Injectable } from '@angular/core';
import { BOOKS } from './mock/mock-books';
import { PAGES } from './mock/mock-pages';
import { CATEGORIES } from './mock/mock-categories';


@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = USERS;
        let books = BOOKS;
        let pages = PAGES;
        let categories = CATEGORIES;
        return { users,books,pages,categories };
    }
}