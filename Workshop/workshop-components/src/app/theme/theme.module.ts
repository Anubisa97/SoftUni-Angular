import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { PostsListsComponent } from '../posts-lists/posts-lists.component';
import { ThemesListsComponent } from '../themes-lists/themes-lists.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    ThemesListsComponent,
    PostsListsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ThemeModule { }
