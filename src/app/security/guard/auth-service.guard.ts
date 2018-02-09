import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthServiceGuard implements CanActivate {
  getUserloggedIn: boolean;
  username: any;

  constructor(private service: AuthServiceService){
    this.getUserloggedIn = false;
  }
  setLogin(){
    return this.getUserloggedIn = true;
  }
  getLogin(){
    return this.getUserloggedIn;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
