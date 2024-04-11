import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { RouterModule } from '@angular/router';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { SlicePipe } from './pipes/slice.pipe';

@NgModule({
  declarations: [EmailDirective, ElapsedTimePipe, SlicePipe],
  imports: [CommonModule, RouterModule],
  exports: [EmailDirective, ElapsedTimePipe, SlicePipe],
})
export class SharedModule { }
