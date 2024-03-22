import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/service.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {}
  theme = {} as Theme;

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];
      this.apiService.getTheme(id).subscribe((themes) => {
        this.theme = themes;
        console.log(themes);
      });
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
}
