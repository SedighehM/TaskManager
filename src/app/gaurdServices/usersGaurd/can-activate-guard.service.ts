import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CanActivateUsersGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    var role = localStorage.getItem("username");
    if (role && route.data.expectedRole == role) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
