import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wsb-blog-main-article-card',
  templateUrl: './main-article-card.component.html',
  styleUrls: ['./main-article-card.component.scss'],
  providers: [NgbCarouselConfig]
})
export class MainArticleCardComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
