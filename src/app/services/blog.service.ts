import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public posts: any;

  private urlPostsBase: string = 'http://localhost:3000/posts';
  private urlSortByDate: string = '?_sort=postDate&_order=desc';

  constructor(private http: HttpClient) {}

  public getPosts() {
    this.http
      .get(this.urlPostsBase + this.urlSortByDate)
      .subscribe((data) => {
        this.posts = data;
      });
  }

  public getPost(postId: number) {
    return this.posts.find((post) => post.id === postId);
  }

  public sendPost(post: any) {
    return this.http.post(this.urlPostsBase, post);
  }

  public editPost(postId: number, post: any) {
    const prevPost = this.getPost(postId);
    post = {...post, postDate: prevPost.postDate}
    return this.http.patch(this.urlPostsBase + '/' + postId, post)
  }

  public deletePost(postId: number) {
    return this.http.delete(this.urlPostsBase + '/' + postId)
  }
}
