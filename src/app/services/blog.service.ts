import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = "http://localhost:3000/posts"

  constructor(private http: HttpClient) {}

  public getPosts(){
    return this.http.get(this.url);
  }

  public sendPost(post){
    return this.http.post(this.url, post)
  }
}
