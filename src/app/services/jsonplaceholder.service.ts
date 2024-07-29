import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  postList:Post[]=[];

  constructor(private http:HttpClient) { }
  getPostList(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
