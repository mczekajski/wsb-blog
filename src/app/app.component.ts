import { Component } from '@angular/core';

@Component({
  selector: 'wsb-blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsb-blog';

  onContentClick() {
    document
      .querySelector('.header__menu-list')
      .classList.add('header__menu-list--hidden');
  }
}
