import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class LoggedinUserGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const loggedinUser = JSON.parse(localStorage.loggedinUser || null)
        if (!loggedinUser) {
            this.router.navigateByUrl('login')
            return false
        }
        return true
    }

}
