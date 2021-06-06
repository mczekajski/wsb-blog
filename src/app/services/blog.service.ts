import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  postTitle: string;
  postBody: string;
  postDate: string;
  id: number;
  lastEditDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public posts: Array<Post>;

  private urlPostsBase: string = 'http://localhost:3000/posts';
  private urlSortByDate: string = '?_sort=postDate&_order=desc';

  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http
      .get<Array<Post>>(this.urlPostsBase + this.urlSortByDate)
  }

  public getPost(postId: number) {
    return this.http
    .get<Post>(this.urlPostsBase + '/' + postId)
  }

  public sendPost(post: Post) {
    return this.http.post(this.urlPostsBase, post);
  }

  public editPost(postId: number, post: Post) {
    let prevPost: Post;
    this.getPost(postId).subscribe(post => prevPost = post);
    post = { ...post, postDate: prevPost.postDate };
    return this.http.patch(this.urlPostsBase + '/' + postId, post);
  }

  public deletePost(postId: number) {
    return this.http.delete(this.urlPostsBase + '/' + postId);
  }
}
