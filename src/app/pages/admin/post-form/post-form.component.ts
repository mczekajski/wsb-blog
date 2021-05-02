import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public postForm = this.formBuilder.group({
    postTitle: [''],
    postBody: ['']
  })

  onSubmit() {
    this.blogService.sendPost(this.postForm.value).subscribe(post => console.log(post));
  }


  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {}

}
