import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    {path: '', component: HomeComponent , title : 'home'},

    {path: 'login', component: LoginComponent , title : 'Login'},
];
