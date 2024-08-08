import { Component, OnInit, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../post.service';
import { environment } from '../../../environments/environment';

interface Post {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {
  post!: Post;
  content: string = 'Blog content not yet available. Check back later!';
  pollingInterval: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private postService: PostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      if (postId) {
        const post = this.postService.getPostById(postId);
        if (post) {
          this.post = post;
          if (environment.enablePolling) {
            this.startPolling(postId);
          } else {
            this.loadContent(postId);
          }
        } else {
          console.error('Post not found');
        }
      } else {
        console.error('Post ID not found');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }

  startPolling(id: string): void {
    this.loadContent(id);
    this.pollingInterval = setInterval(() => {
      this.loadContent(id);
    }, 2000); // Poll every 5 seconds
  }

  loadContent(id: string): void {
    this.http.get(`assets/blog-content/${id}/${id}.html`, { responseType: 'text' })
      .subscribe(
        data => {
          if (this.content !== data) {
            this.content = data;
          }
        },
        error => console.error('Error loading content:', error)
      );
  }
}
