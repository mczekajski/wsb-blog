import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'wsb-blog-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  posts!: any;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().subscribe(data => this.posts = data);
  }
}
