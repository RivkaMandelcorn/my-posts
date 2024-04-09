import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  data:Array<Post> = [];
  id:number = 0;
  constructor(private activatedRoute: ActivatedRoute, private postsService:PostsService) {
  }
  async ngOnInit(): Promise<void> {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    console.log(this.id);
    // this.postsService.getPostsById(this.id);
    await this.postsService.getPostsById(this.id).then((dat: Array<any>) => {
      this.data = dat;
    this.data.forEach(datale=>console.log(datale.id))}
    ).catch(err =>  this.data=[]
    );
  }

}


