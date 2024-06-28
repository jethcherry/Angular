import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TwitterServiceService } from '../../Services/twitter-service.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../Models/user';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | undefined;


  constructor(private twitterService:TwitterServiceService){}

  ngOnInit(): void {
    this.twitterService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const id = target.value; 
    if (!id) {
      console.error('No user selected.');
      return;
    }
    this.selectedUser = this.users.find(user => user.id === Number(id));
    if (!this.selectedUser) {
      console.error(`User with ID ${id} not found.`);
      return;
    }
    console.log(`User ${this.selectedUser.name} selected.`);

  }


}
