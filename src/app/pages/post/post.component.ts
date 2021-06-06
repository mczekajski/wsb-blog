import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService, Post } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  id: number;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.blogService.getPost(this.id).subscribe(post => this.post = post);
  }

  ngOnChanges(): void {
    console.log('change!')
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
