import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../post.service';

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
  content: string = 'Blog content not yet available. Check back later!';

  constructor(private route: ActivatedRoute, private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      if (postId) {
        const post = this.postService.getPostById(postId);
        if (post) {
          this.post = post;
          this.loadContent(postId);
        } else {
          console.error('Post not found');
        }
      } else {
        console.error('Post ID not found');
      }
    });
  }

  loadContent(id: string): void {
    this.http.get(`assets/blog-content/${id}.html`, { responseType: 'text' })
      .subscribe(
        data => this.content = data,
        error => console.error('Error loading content:', error)
      );
  }
}
