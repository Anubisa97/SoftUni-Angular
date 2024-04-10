import { Component, OnInit } from '@angular/core';
import { adminService } from '../admin/admin.service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;
  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.adminService.getProfile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    });
  }
}
// export class AuthenticateComponent {
//   isAuthenticating = true;
// }
