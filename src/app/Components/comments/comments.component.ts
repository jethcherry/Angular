import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../Models/commnets';
import { TwitterServiceService } from '../../Services/twitter-service.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  @Input() postId!: number; 
  constructor(private twitterService: TwitterServiceService) {}

  comments: Comment[] = [];

  ngOnInit(): void {
    if (this.postId) {
      this.twitterService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }

}
