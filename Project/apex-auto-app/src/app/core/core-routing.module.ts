import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { ServicesComponent } from '../main/services/services.component';
import { WhyUsComponent } from '../main/why-us/why-us.component';
import { ContactComponent } from '../main/contact/contact.component';
import { ArticlesComponent } from '../posts/articles/articles.component';
import { CarNewsComponent } from '../posts/car-news/car-news.component';
import { LoginComponent } from '../admin/login/login.component';
import { RegisterComponent } from '../admin/register/register.component';
import { ArticleDetailsComponent } from '../posts/article-details/article-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'news', component: CarNewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
