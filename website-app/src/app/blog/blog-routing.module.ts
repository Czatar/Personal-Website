import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: ':category', component: CategoryComponent },
  { path: ':category/:post', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
