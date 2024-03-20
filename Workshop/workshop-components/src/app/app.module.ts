import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ThemesListsComponent } from './themes-lists/themes-lists.component';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListsComponent,
    PostsListsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, HttpClientModule, UserModule, ThemeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
