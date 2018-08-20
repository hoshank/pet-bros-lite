import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivateChild(_childRoute: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthorized();
  }
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthorized();
  }

  canLoad(_route: Route): Observable<boolean> {
    return this.isAuthorized();
  }

  private isAuthorized(): Observable<boolean> {
    return this.userService.currentUser.pipe(
      take(1),
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
