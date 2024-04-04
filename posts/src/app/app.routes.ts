import { Routes } from '@angular/router';
import { WritersComponent } from './writers/writers/writers.component';
import { PostsComponent } from './posts/posts/posts.component';

export const routes: Routes = [
    {path: 'writers', component:  WritersComponent},
    {path: 'posts', component: PostsComponent}
];
