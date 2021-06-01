import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './pages/home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './pages/admin/admin.module';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './pages/post/post.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MenuComponent,
    PostComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    NgbModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
