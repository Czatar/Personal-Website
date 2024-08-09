import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../post.service';

interface Post {
  id: string;
  title: string;
  category: string;
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
  categories: Category[] = [];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(): void {
    this.initializeCategories();
  }

  initializeCategories(): void {
    const posts = this.postService.getAllPosts();

    // Group posts by category
    const categoryMap: { [key: string]: Post[] } = {};

    posts.forEach(post => {
      const categoryName = post.category;
      if (!categoryMap[categoryName]) {
        categoryMap[categoryName] = [];
      }
      categoryMap[categoryName].push(post);
    });

    // Convert the dictionary to an array of categories
    this.categories = Object.keys(categoryMap).map(categoryName => ({
      name: categoryName,
      expanded: false,
      posts: categoryMap[categoryName]
    }));
  }

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }
}
