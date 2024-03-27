import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';

@NgModule({
  declarations: [WelcomeComponent, EmailDirective],
  imports: [CommonModule],
  exports: [WelcomeComponent, EmailDirective],
})
export class SharedModule {}
