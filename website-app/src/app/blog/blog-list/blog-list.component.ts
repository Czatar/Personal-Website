import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Post {
  id: string;
  title: string;
}

interface Category {
  name: string;
  expanded: boolean;
  posts: Post[];
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  categories: Category[] = [
    { name: 'Category 1', expanded: false, posts: [{ id: 'post1', title: 'Post 1' }, { id: 'post2', title: 'Post 2' }] },
    { name: 'Category 2', expanded: false, posts: [{ id: 'post3', title: 'Post 3' }, { id: 'post4', title: 'Post 4' }] },
    { name: 'Category 3', expanded: false, posts: [{ id: 'post5', title: 'Post 5' }, { id: 'post6', title: 'Post 6' }] }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }
}
