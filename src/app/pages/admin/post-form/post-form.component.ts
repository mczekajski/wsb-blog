import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  public postForm = this.formBuilder.group({
    postTitle: [''],
    postBody: [''],
    postDate: [''],
    lastEditDate: [''],
  });

  postId = 0;

  onSubmit() {
    if (this.postForm.value.selected != null) this.sendNewPost();
  }

  sendNewPost() {
    this.postForm.setValue({ ...this.postForm.value, postDate: new Date() });
    this.blogService
      .sendPost(this.postForm.value)
      .subscribe((post) => console.log(post));
  }

  editPost() {
    window.alert('post edited!');
  }

  deletePost() {
    window.alert('post deleted!');
  }

  onChange(e: any) {
    this.postId = parseInt(e.target.value);
    const post = this.blogService.posts.find((post) => post.id == this.postId);
    post
      ? this.postForm.patchValue({
          postTitle: post.postTitle,
          postBody: post.postBody,
        })
      : this.postForm.patchValue({ postTitle: '', postBody: '' });
  }

  constructor(
    private formBuilder: FormBuilder,
    public blogService: BlogService
  ) {}

  ngOnInit(): void {
  }
}
