import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService, Post } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  public postForm: FormGroup;
  public postId: string = '';

  @Input() posts: any;

  onSubmit() {
    if (this.postForm.value.selected != null) this.sendNewPost();
  }

  sendNewPost() {
    this.postForm.setValue({ ...this.postForm.value, postDate: new Date() });
    this.blogService
      .sendPost(this.postForm.value)
      .subscribe();
  }

  editPost() {
    const post = this.posts.find((post: Post) => post._id == this.postId);
    this.postForm.setValue({ ...this.postForm.value, postDate: post.postDate, lastEditDate: new Date() });
    this.blogService.editPost(this.postId, this.postForm.value).subscribe(() => alert('post edited'));
  }

  deletePost() {
    this.blogService.deletePost(this.postId).subscribe(() => alert('post deleted'));
  }

  onChange(e: any) {
    this.postId = e.target.value;
    const post = this.posts.find((post: Post) => post._id == this.postId);
    post
      ? this.postForm.patchValue({
          postTitle: post.postTitle,
          postBody: post.postBody,
        })
      : this.postForm.patchValue({ postTitle: '', postBody: '' });
  }

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      postTitle: ['', { validators: [Validators.minLength(10), Validators.required], updateOn: "blur" }],
      postBody: ['', { validators: [Validators.minLength(100), Validators.required], updateOn: "blur" }],
      postDate: [''],
      lastEditDate: [''],
    });
  }
}
