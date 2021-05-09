import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListElementComponent } from './post-list-element.component';

describe('PostListElementComponent', () => {
  let component: PostListElementComponent;
  let fixture: ComponentFixture<PostListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
