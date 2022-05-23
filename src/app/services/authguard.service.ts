import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth,private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.afAuth.authState.pipe(take(1),
      map((user: any) => !!user),
      tap((loggedIn: any) => {
        console.log(loggedIn)
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      })
    )
    }


}
