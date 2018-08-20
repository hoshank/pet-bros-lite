import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  Router,
  Resolve,
} from '@angular/router';

import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<void> {
  constructor(private userService: UserService, private router: Router) {
  }

  resolve(): Observable<any> {
    return this.userService.currentUser.pipe(take(1));
  }
}

