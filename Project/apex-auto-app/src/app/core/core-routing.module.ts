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
import { AddArticleComponent } from '../posts/add-article/add-article.component';
import { AuthActivate } from '../guards/auth.guard';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', component: HomeComponent },

  { path: 'services', component: ServicesComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: CarNewsComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent, canActivate: [AuthActivate] },
  { path: 'themes', component: ArticlesComponent },
  { path: 'add-article', component: AddArticleComponent, canActivate: [AuthActivate] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
