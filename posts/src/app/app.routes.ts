import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WritersComponent } from './components/writers/writers/writers.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { AuthGuard,  } from './core/services/Authentication/auth-guard.service';
import { LogoutComponent } from './components/logout/logout/logout.component';

export const routes: Routes = [
    
    {path: '', component: HomeComponent , title : 'home' ,canActivate: [AuthGuard]},
    
    {path: 'home', component: HomeComponent , title : 'home' ,canActivate: [AuthGuard]},

    {path: 'login', component: LoginComponent , title : 'Login'},

    {path: 'logout', component: LogoutComponent , title : 'logout'},

    {path: 'writers', component:  WritersComponent, title: 'Writers',canActivate: [AuthGuard]},
  
    {path: 'posts/:id', component: PostsComponent, title: 'Posts',canActivate: [AuthGuard]},


];
