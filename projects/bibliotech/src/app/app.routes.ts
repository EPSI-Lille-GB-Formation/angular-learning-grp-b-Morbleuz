import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'login', component: LoginComponentComponent },
    { path: 'register', component: RegisterComponentComponent },

];
