import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { adminService } from 'src/app/admin/admin.service.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  // themes: Theme[] = [];
  // constructor(private apiService: ApiService, private adminService: adminService) { }


  // ngOnInit(): void {
  //   this.apiService.getThemes().subscribe((themes) => {
  //     // console.log(themes);
  //     this.themes = themes;
  //   });
  // }

  // get isLoggedIn(): boolean {
  //   return this.adminService.isLogged;
  // }

  // get userId(): string {
  //   return this.adminService.user?.id || '';
  // }

  // isSubscribed(theme: Theme) {
  //   const isSubscribedUser = theme.subscribers.find((s) => s === this.userId);
  //   return !isSubscribedUser;
  // }
}
