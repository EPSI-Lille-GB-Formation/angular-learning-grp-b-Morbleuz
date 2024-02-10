import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { BookComponent } from './components/book/book.component';
import { MybookComponent } from './components/mybook/mybook.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminUpdateCategoryComponent } from './components/admin-update-category/admin-update-category.component';
export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'login', component: LoginComponentComponent },
    { path: 'register', component: RegisterComponentComponent },
    { path: 'profil', component: ProfileComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: 'admin/user', component: AdminUserComponent },
    { path: 'admin/category', component: AdminCategoryComponent},
    { path: 'admin/category/:id', component: AdminUpdateCategoryComponent},
    { path: 'book/:id', component: BookComponent },
    { path: 'mybooks', component: MybookComponent },
];
