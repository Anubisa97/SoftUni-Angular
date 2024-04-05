import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/service.service';

@Component({
  selector: 'app-themes-lists',
  templateUrl: './themes-lists.component.html',
  styleUrls: ['./themes-lists.component.css'],
})
export class ThemesListsComponent implements OnInit {
  themes: Theme[] = []
  constructor(private api: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      // console.log(themes);
      this.themes = themes
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  get userId(): string {
    return this.userService.user?.id || "";
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find(s => s === this.userId)
    return !!isSubscribedUser
  }
}
