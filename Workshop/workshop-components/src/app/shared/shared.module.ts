import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WelcomeComponent, EmailDirective],
  imports: [CommonModule, RouterModule],
  exports: [WelcomeComponent, EmailDirective],
})
export class SharedModule { }
