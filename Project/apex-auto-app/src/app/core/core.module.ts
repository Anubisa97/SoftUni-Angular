import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, CoreRoutingModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
