import { User } from '../models/users';

export const USERS: User[] = [
    {
        id: 1,
        firstname: 'John',
        lastname : 'Snow',
        email : 'johnsnow@gmail.com',
        password : 'johnsnow',
        role : ["ROLE_USER"],
        booksId : []
    },
    {
        id: 2,
        firstname: 'admin',
        lastname : 'admin',
        email : 'admin@gmail.com',
        password : 'admin',
        role : ["ROLE_USER","ROLE_ADMIN"],
        booksId : [1]
    }
]