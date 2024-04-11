import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { adminService } from '../admin/admin.service.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
    constructor(private userService: adminService, private router: Router) { }
    isLogged = this.userService.isLogged

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log('CanActivate called');
        if (this.isLogged) {
            return true
        } else {
            this.router.navigate(['/home']);
            return false
        }
    }

}