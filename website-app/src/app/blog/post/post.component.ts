import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Post {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: Post;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      if (postId) {
        this.post = this.getPostById(postId);
      } else {
        // Handle the case where postId is null
        console.error('Post ID not found');
      }
    });
  }

  getPostById(id: string): Post {
    // Fetch post by ID
    // Example data
    return { id, title: `Post ${id}`, content: `This is the content of post ${id}.` };
  }
}
