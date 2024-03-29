import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/untils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showEditMode: boolean = false

  profileDetails: ProfileDetails = {
    username: 'John',
    email: 'John@gmail.com',
    phoneNumber: '885-464-567'
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    phoneNumber: ['']
  })

  constructor(private fb: FormBuilder) { }

  toggleMode(): void {
    this.showEditMode = !this.showEditMode
  }

  saveProfileHandler(): void {
    console.log('invoke ', this.form.value);

    if (this.form.invalid) {
      return
    }

    this.profileDetails = this.form.value as ProfileDetails
    this.toggleMode()
  }
}
