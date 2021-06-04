import { Component } from '@angular/core';

@Component({
  selector: 'wsb-blog-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor() {}

  onMenuClick() {
    document
      .querySelector('.header__menu-list')
      .classList.toggle('header__menu-list--hidden');
  }
}
