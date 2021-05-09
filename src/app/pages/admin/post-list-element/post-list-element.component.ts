import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wsb-blog-post-list-element',
  templateUrl: './post-list-element.component.html',
  styleUrls: ['./post-list-element.component.scss']
})
export class PostListElementComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

}
