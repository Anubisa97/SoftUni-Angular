import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/untils/email-validator';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      tel,
    };
    this.form.setValue({
      username,
      email,
      tel,
    });
  }

  toggleMode(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandler(): void {
    console.log('invoke ', this.form.value);

    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleMode();
    });
  }
}
