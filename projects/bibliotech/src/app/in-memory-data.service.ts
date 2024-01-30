import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from './mock/mock-users';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = USERS;
        return { users };
    }
}