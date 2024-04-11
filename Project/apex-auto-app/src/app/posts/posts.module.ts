import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarNewsComponent } from './car-news/car-news.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './post-routing.module';
import { AddArticleComponent } from './add-article/add-article.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    CarNewsComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PostsModule { }
