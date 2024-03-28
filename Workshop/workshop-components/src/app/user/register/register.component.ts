import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/untils/email-validator';
import { matchPasswordValidator } from 'src/app/shared/untils/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    phone: [''],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    },
      {
        validators: [matchPasswordValidator('password', 'rePassword')]
      })

  })

  constructor(private fb: FormBuilder) { }

  register(): void {
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value);

  }
}
