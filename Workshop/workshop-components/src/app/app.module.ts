import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ThemesListsComponent } from './themes-lists/themes-lists.component';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListsComponent,
    PostsListsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
