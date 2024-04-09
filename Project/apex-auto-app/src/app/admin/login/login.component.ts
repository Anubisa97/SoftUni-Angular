import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { adminService } from '../admin.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private adminService: adminService, private router: Router) { }

  login(form: NgForm) {
    // console.log(form.value);
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.adminService
      .login(email, password)
      .subscribe(() => this.router.navigate(['/themes']));
  }
}
