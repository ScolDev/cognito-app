import { MODULES_ROUTES } from './../common/routes';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return Auth.currentCredentials()
      .then(credentials => ! credentials.authenticated);
  }

  canLoad (
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return Auth.currentCredentials()
      .then(credentials => {
        const currentPath = route.path;
        const { signIn, home } = MODULES_ROUTES;
        const isAuthenticated = credentials.authenticated;

        if (currentPath === home) {
          return isAuthenticated || this.redirectTo(signIn);
        }
        return !isAuthenticated || this.redirectTo(home);
      });
  }

  redirectTo(path: string) {
    return this.router.parseUrl(path);
  }
}
