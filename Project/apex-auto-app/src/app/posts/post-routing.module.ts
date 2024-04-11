import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomeComponent } from '../main/home/home.component';
import { ArticlesComponent } from './articles/articles.component';


const route: Routes = [
    {
        path: 'themes',
        children: [
            { path: '', pathMatch: 'full', component: ArticlesComponent },
            { path: ':themeId', component: ArticleDetailsComponent },
        ],
    },
    { path: 'home', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],
})
export class PostsRoutingModule { }
