import { Component, Input } from '@angular/core';
import { User } from '../../Models/user'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TwitterServiceService } from '../../Services/twitter-service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user!: User;

  constructor(private twitterService: TwitterServiceService) { }

  ngOnInit(): void {
    this.twitterService.getUser(1).subscribe(user => {
      this.user = user;
    });
  }

}
