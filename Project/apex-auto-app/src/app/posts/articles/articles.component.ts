import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/admin/admin.service.service';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  themes: Theme[] = [];
  constructor(private api: ApiService, private adminService: adminService) { }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      // console.log(themes);
      this.themes = themes;
    });
  }

  get isLoggedIn(): boolean {
    return this.adminService.isLogged;
  }

  get userId(): string {
    return this.adminService.user?.id || '';
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => s === this.userId);
    return !isSubscribedUser;
  }



}
