import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'})
  export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                         boolean | Promise<boolean> | Observable<boolean> {
    return this.authService.checkLoogedIn().then(logged =>{
      if(!logged){
        this.router.navigate(['/login']);
        return false;
      }
      return true;
     }
    )
  }
}