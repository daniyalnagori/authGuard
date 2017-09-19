import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService} from './login.service';
import {Router} from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router:Router,private LoginService:LoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.LoginService.UserStatus)
              this.router.navigate(['/login']);
else
    return this.LoginService.UserStatus;

  }
}
