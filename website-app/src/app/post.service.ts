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
    { id: 'post1', title: 'Making This Website - 8/8/2024', content: '', category: "Programming"},
    { id: 'post2', title: 'XP Ransomware Analysis - 8/9/2024', content: '', category: "Programming"},
    { id: 'post3', title: 'How I landed an Offer with Google - 10/3/2024', content: '', category: "Personal Life"}
  ];

  getPostById(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  getAllPosts(): Post[] {
    return this.posts;
  }
}
