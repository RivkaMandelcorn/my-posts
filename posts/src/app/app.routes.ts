import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { WritersComponent } from './writers/writers/writers.component';
import { PostsComponent } from './posts/posts/posts.component';

export const routes: Routes = [
    
    {path: '', component: HomeComponent , title : 'home'},

    {path: 'login', component: LoginComponent , title : 'Login'},

    {path: 'writers', component:  WritersComponent},
  
    {path: 'posts', component: PostsComponent}

];
