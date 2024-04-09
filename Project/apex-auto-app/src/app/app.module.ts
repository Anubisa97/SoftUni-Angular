import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { MainRoutingModule } from './main/main-routing.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { PostsModule } from './posts/posts.module';
// import { NotFoundComponent } from './error/404/not-found.component;

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    // NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoreRoutingModule,
    MainModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    PostsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
