import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { MainArticleCardComponent } from './main-article-card/main-article-card.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    HomeComponent,
    MainArticleCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
