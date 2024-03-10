import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-lists',
  templateUrl: './themes-lists.component.html',
  styleUrls: ['./themes-lists.component.css']
})
export class ThemesListsComponent implements OnInit{

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
      this.api.getThemes().subscribe(themes => {
        console.log(themes);
        
      })
  }
}
