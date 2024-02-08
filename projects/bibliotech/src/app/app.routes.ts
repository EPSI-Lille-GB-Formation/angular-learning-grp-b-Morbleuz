import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'login', component: LoginComponentComponent },
    { path: 'register', component: RegisterComponentComponent },
    { path: 'profil', component: ProfileComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: 'admin/user', component: AdminUserComponent },




];
