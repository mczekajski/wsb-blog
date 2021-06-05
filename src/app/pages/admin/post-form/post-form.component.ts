import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  public postForm: FormGroup;
  public postId: number = 0;

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
    this.postForm.setValue({ ...this.postForm.value, lastEditDate: new Date() });
    console.log(this.postForm.value)
    this.blogService.editPost(this.postId, this.postForm.value).subscribe(() => alert('post edited!'));
  }

  deletePost() {
    this.blogService.deletePost(this.postId).subscribe(() => alert('post deleted!'));
  }

  logForm() {
    console.log(this.postForm)
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
    this.postForm = this.formBuilder.group({
      postTitle: ['', { validators: [Validators.minLength(10), Validators.required], updateOn: "blur" }],
      postBody: ['', { validators: [Validators.minLength(100), Validators.required], updateOn: "blur" }],
      postDate: [''],
      lastEditDate: [''],
    });
  }
}
