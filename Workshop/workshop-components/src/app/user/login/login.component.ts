import { Component } from '@angular/core';
import { UserService } from '../service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains = EMAIL_DOMAIN;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    // console.log(form.value);
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService
      .login(email, password)
      .subscribe(() => this.router.navigate(['/themes']));
  }
}
