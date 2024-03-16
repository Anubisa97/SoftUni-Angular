import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css'],
})
export class PostsListsComponent implements OnInit {
  posts: Post[] = []
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts
    });
  }
}

