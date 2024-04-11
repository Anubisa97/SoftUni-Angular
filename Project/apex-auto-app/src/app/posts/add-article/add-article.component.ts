import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  addArticle(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { articleTitle, articleText } = form.value;
    this.apiService.createTheme(articleTitle, articleText).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }

}
