import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
