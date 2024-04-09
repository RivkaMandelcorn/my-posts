import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WritersComponent } from './components/writers/writers/writers.component';
import { PostsComponent } from './components/posts/posts/posts.component';

export const routes: Routes = [
    
    {path: '', component: HomeComponent , title : 'home'},

    {path: 'login', component: LoginComponent , title : 'Login'},

    {path: 'writers', component:  WritersComponent, title: 'Writers'},
  
    {path: 'posts/:id', component: PostsComponent, title: 'Posts'},


];
