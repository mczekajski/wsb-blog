import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;
  id: number;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, public blogService: BlogService) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // converts string 'id' to a number
    });
    this.post = this.blogService.getPost(this.id);
    console.log(this.post);
  }

  ngOnChanges(): void {
    console.log('change!')
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
