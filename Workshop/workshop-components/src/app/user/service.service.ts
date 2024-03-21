import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined
  USER_KEY = '[user]'

  get isLogged(): boolean {
    return !!this.user
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || ''
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined
    }
  }

  login() {
    this.user = {
      firstName: 'Tisho',
      email: 'tisho123@email.com',
      phoneNumber: '+35988123696',
      password: '123123',
      id: "5fa64b162183ce1728ff371d"
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined
    localStorage.removeItem(this.USER_KEY)
  }
}
