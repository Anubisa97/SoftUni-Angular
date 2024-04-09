import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarNewsComponent } from './car-news/car-news.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CarNewsComponent,
    ArticlesComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

})
export class PostsModule { }
