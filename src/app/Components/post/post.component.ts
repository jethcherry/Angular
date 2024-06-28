import { Component, OnInit } from '@angular/core';
import { TwitterServiceService } from '../../Services/twitter-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from '../comments/comments.component';
import { Posts } from '../../Models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FormsModule,CommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  implements OnInit{
  posts:Posts[]=[]

  constructor(private twitterService:TwitterServiceService){}
  ngOnInit(): void {
    this.twitterService.getPosts(1).subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleComments(post: Posts): void {
    post.showComments = !post.showComments;
  }

}
