import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '../utils/routes';

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
  constructor(private http: HttpClient) {}

  private jwtHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': window.localStorage.getItem('jwt'),
  });

  // POSTS
  public getPosts() {
    return this.http.get<Array<Post>>(Routes.BASE + Routes.POSTS);
  }

  public getPost(postId: number) {
    return this.http.get<Post>(Routes.BASE + Routes.POSTS + '/' + postId);
  }

  public sendPost(post: Post) {
    return this.http.post(Routes.BASE + Routes.POSTS + '/', post, {
      headers: this.jwtHeader,
    });
  }

  public editPost(postId: string, editedPost: Post) {
    return this.http.patch(
      Routes.BASE + Routes.POSTS + '/' + postId,
      editedPost,
      { headers: this.jwtHeader }
    );
  }

  public deletePost(postId: string) {
    return this.http.delete(Routes.BASE + Routes.POSTS + '/' + postId, {
      headers: this.jwtHeader,
    });
  }
}
