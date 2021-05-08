import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [
    AdminComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
