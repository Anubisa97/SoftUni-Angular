import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { adminService } from 'src/app/admin/admin.service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private adminService: adminService,
    private activeRoute: ActivatedRoute
  ) { }
  theme = {} as Theme;

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      console.log(data);

      const id = data['themeId'];
      this.apiService.getTheme(id).subscribe((themes) => {
        this.theme = themes;
        console.log(themes);
      });
    });
  }

  get isLoggedIn(): boolean {
    return this.adminService.isLogged;
  }
}