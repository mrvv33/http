import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, from, mergeMap, skip, take, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  postList:Post[]=[];

  constructor(private http:HttpClient) { }
  getPostList(page:number,pageSize:number){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(mergeMap(x=>from(x)),toArray(),skip((page-1)*pageSize),take(5));
  }
  getPost(id:number){
  /*const customHeader=new HttpHeaders({
    'Content-Type':'application/json',
    "Authorization":'Bearer my jwt'
  })  */


    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`
    // {observe:'response'} )
    )}
  
}
