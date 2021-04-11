import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().subscribe(data => this.posts = data);
  }

}
