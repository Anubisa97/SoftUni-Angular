import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-lists',
  templateUrl: './themes-lists.component.html',
  styleUrls: ['./themes-lists.component.css'],
})
export class ThemesListsComponent implements OnInit {
  themes: Theme[] = []
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      console.log(themes);
      this.themes = themes
    });
  }
}
