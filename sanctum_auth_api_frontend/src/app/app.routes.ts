import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AfficherComponent } from './pages/afficher/afficher.component';

export const routes: Routes = [
    {path: 'register',component:RegisterComponent},
    {path: 'login',component:LoginComponent},
    {path: 'Afficher',component:AfficherComponent},
];
