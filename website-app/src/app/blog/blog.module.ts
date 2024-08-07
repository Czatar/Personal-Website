import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [
    BlogListComponent,
    CategoryComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule
  ]
})
export class BlogModule { }
