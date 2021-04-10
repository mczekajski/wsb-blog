import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArticleCardComponent } from './main-article-card.component';

describe('MainArticleCardComponent', () => {
  let component: MainArticleCardComponent;
  let fixture: ComponentFixture<MainArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
