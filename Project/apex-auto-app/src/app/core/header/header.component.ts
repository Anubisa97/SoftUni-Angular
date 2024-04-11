import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminService } from 'src/app/admin/admin.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private adminService: adminService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.adminService.isLogged;
  }

  get username(): string {
    return this.adminService.user?.username || '';
  }

  logout() {
    this.adminService.logout().subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: () => {
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
