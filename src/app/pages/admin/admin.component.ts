import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'wsb-blog-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public posts: any;

  constructor(private blogService: BlogService, private userService: UserService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
  
}
