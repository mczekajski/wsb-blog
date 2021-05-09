import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wsb-blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: any;

  constructor() { }

  ngOnInit(): void {
  }

}
