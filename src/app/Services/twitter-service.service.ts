import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { Posts } from '../Models/post';
import { Comment } from '../Models/commnets';

@Injectable({
  providedIn: 'root'
})
export class TwitterServiceService {

  private     userUrl = 'https://jsonplaceholder.typicode.com/users'
  private     postUrl = 'https://jsonplaceholder.typicode.com/posts'
  private     commentUrl = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
  getUser(id:number):Observable<any>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }
  getPosts(id:number){
    return this.http.get<Posts[]>(`${this.postUrl}?userId=${id}`);
    
  }
  getComments(id:number){
    return this.http.get<Comment[]>(`${this.commentUrl}?postId=${id}`);
  }
}
