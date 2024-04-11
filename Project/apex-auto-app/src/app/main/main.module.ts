import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
// import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { SelectedServiceComponent } from './selected-service/selected-service.component';



@NgModule({
  declarations: [HomeComponent, ContactComponent, ServicesComponent, WhyUsComponent, SelectedServiceComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HomeComponent, ContactComponent, ServicesComponent, WhyUsComponent
  ]
})
export class MainModule { }
