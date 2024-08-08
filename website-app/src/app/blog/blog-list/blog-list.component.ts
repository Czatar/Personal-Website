import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../post.service';

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
    { 
      name: 'Programming', 
      expanded: false, 
      posts: [
        { 
          id: 'post1', 
          title: 'Making This Website - 8/8/2024' 
        }
      ] 
    }
  ];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(): void {}

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }
}
