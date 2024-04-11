import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { ServicesComponent } from '../main/services/services.component';
import { WhyUsComponent } from '../main/why-us/why-us.component';
import { ContactComponent } from '../main/contact/contact.component';
import { SelectedServiceComponent } from './selected-service/selected-service.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', component: HomeComponent },
  {
    path: 'services',
    children: [
      { path: '', pathMatch: 'full', component: ServicesComponent },
      { path: ':serviceId', component: SelectedServiceComponent },
    ],
  },
  { path: 'services', component: ServicesComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
