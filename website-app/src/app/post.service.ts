import { Injectable } from '@angular/core';

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { id: 'post1', title: 'Making This Website - 8/8/2024', content: 'This is the content of post1.', category: "Programming"}
  ];

  getPostById(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  getAllPosts(): Post[] {
    return this.posts;
  }
}
