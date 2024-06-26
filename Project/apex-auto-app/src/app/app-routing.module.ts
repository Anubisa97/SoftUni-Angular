import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './core/error/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'error', component: ErrorComponent },
  // { path: '**', redirectTo: '/404' },
  // { path: '404', component: NotFoundComponent },
  // Needs to be fixed since everything is being redirected there.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
