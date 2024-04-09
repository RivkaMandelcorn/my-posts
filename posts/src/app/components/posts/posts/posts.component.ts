import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostsService } from '../posts.service';
import { Accordion, AccordionComponent } from '../../../core/customComponents/accordion/accordion.component';
import { Writers, WritersService } from '../../writers/writers.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  data:Array<Post> = [];
  id:number = 0;
  accordions?:Accordion[];
  name:string="";
  writer?:Writers;
  constructor(private activatedRoute: ActivatedRoute, private postsService:PostsService, private writersService:WritersService
  ) {
  }
  async ngOnInit(): Promise<void> {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    console.log(this.id);
    // this.postsService.getPostsById(this.id);
    await this.postsService.getPostsById(this.id).then((dat: Array<any>) => {
      this.data = dat;
    this.data.forEach(datale=>{console.log(datale.id); this.accordions?.push({title:datale.title,body:datale.body})})}
    ).catch(err =>  this.data=[]
    );
    await this.writersService.getWriterById(this.id).then((dat: Writers) => {
      this.writer = dat;
    }
    ).catch(err =>  this.data=[]
    );
  }
}


