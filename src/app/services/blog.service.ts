import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private urlBase: string = "http://localhost:3000/posts";
  private urlSortByDate: string = "?_sort=postDate&_order=desc";

  constructor(private http: HttpClient) {}

  public getPosts(){
    return this.http.get(this.urlBase + this.urlSortByDate + '/');
  }

  public sendPost(post){
    return this.http.post(this.urlBase, post)
  }
}
