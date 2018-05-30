import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { UserService } from './user.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<void> {
  constructor(private userService: UserService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.user$.pipe(
      take(1),
      map(user => user)
    );
  }
}

