import {CanActivate, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private jwtHelper: JwtHelperService;

  constructor(private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
