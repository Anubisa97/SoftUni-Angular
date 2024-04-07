import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmailDirective } from './validators/email.directive';
import { RouterModule } from '@angular/router';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [WelcomeComponent, EmailDirective, SlicePipe, ElapsedTimePipe],
  imports: [CommonModule, RouterModule],
  exports: [WelcomeComponent, EmailDirective, SlicePipe, ElapsedTimePipe],
})
export class SharedModule {}
