import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public postForm = this.formBuilder.group({
    selected: [''],
    postTitle: [''],
    postBody: [''],
    postDate: [''],
    lastEditDate: ['']
  })

  onSubmit() {
    if (this.postForm.value.selected != null) this.sendNewPost();
  }

  sendNewPost() {
    this.postForm.setValue({...this.postForm.value, postDate: new Date()})
    this.blogService.sendPost(this.postForm.value).subscribe(post => console.log(post));
  }

  editPost() {
    window.alert('post edited!');
  }

  onChange(e) {
    window.alert(e.target.value)
  }


  constructor(
    private formBuilder: FormBuilder,
    public blogService: BlogService
  ) { }

  ngOnInit(): void {}

}
