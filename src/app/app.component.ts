import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { PostComponent } from './Components/post/post.component';
import { CommentsComponent } from './Components/comments/comments.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ProfileComponent,PostComponent,CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Angular'


 

  
}
