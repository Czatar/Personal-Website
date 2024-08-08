import { Injectable } from '@angular/core';

interface Post {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { id: 'post1', title: 'Making This Website', content: 'This is the content of post1.' }
  ];

  getPostById(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}
