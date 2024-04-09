import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    // private httpClient:HttpClient
  ) { }
  
  // getPosts(): Observable<Array<Post>> {
  //   debugger
  //   return this.httpClient.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  // }

  // getMyPosts(id:number):Array<Post>{
  //   var d =new Array<Post>;
  //    this.getPosts().subscribe(data=>
  //     d = data.filter(post=>post.userId==id)
  //   )
  //   return d;
  // }

  async getPostsById(id:Number): Promise<Array<Post>> {
    var d = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json());
      return await d.filter((a:Post) => a.userId==id);
  }

}

export interface Post{
userId:Number,
id:Number,
title:string,
body:string
}
