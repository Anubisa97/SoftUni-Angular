import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/untils/email-validator';
import { matchPasswordValidator } from 'src/app/shared/untils/match-passwords-validator';
import { adminService } from '../admin.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    tel: [''],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(
    private adminService: adminService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.adminService
      .register(username!, email!, tel!, password!, rePassword!)
      .subscribe(() => this.router.navigate(['']));
  }
}
