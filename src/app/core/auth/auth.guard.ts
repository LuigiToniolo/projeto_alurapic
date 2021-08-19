import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private UserService: UserService,
    private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if(this.UserService.isLogged()){
            this.router.navigate(['user', this.UserService.getUserName()])
            return false;
        }
        return true;
  }
}
