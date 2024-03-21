import { Component } from '@angular/core';
import { UserService } from 'src/app/user/service.service';
import { UserRoutingModule } from 'src/app/user/user-routing.module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private userService: UserService, private userRouter: UserRoutingModule) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }
}
