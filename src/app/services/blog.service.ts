import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  _id: string;
  postTitle: string;
  postBody: string;
  postDate: string;
  lastEditDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private urlHeroku: string = 'https://wsb-blog-backend.herokuapp.com/';
  private urlLocal: string = 'http://localhost:80/';
  private urlBase: string = this.urlLocal;
  private urlLogin: string = 'user/login';
  private urlPosts: string = 'posts';
  private urlSortByDate: string = '?_sort=postDate&_order=desc';

  constructor(private http: HttpClient) {}

  // POSTS
  public getPosts() {
    return this.http
      .get<Array<Post>>(this.urlBase + this.urlPosts)
  }

  public getPost(postId: number) {
    return this.http
    .get<Post>(this.urlBase + this.urlPosts + '/' + postId)
  }

  public sendPost(post: Post) {
    return this.http.post(this.urlBase + this.urlPosts, post);
  }

  public editPost(postId: string, editedPost: Post) {
    return this.http.patch(this.urlBase + this.urlPosts + '/' + postId, editedPost);
  }

  public deletePost(postId: string) {
    return this.http.delete(this.urlBase + this.urlPosts + '/' + postId);
  }

  // LOGIN
  public login(userData) {
    return this.http.post(this.urlBase + this.urlLogin, userData, { responseType: 'text' });    
  }

}
