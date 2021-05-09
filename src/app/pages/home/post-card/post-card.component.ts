import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wsb-blog-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

}
