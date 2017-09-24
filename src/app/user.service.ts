import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable()

export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getUsers()),2000);
    });
  }
}