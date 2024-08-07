import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Post {
  id: string;
  title: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string = '';
  posts: Post[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      this.categoryName = category ? category : '';
      // Load posts for the category
      this.posts = this.getPostsForCategory(this.categoryName);
    });
  }

  getPostsForCategory(category: string): Post[] {
    // Fetch posts for the category
    // Example data
    if (category === 'Category 1') {
      return [{ id: 'post1', title: 'Post 1' }, { id: 'post2', title: 'Post 2' }];
    }
    // Add more categories as needed
    return [];
  }
}
