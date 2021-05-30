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
export class CanActivateCalenderGuardService implements CanActivate {
  constructor(private router:Router) {}
  canActivate(): boolean {
    if (localStorage.getItem("username")) {
      return true;
    } else {
      this.router.navigate(["login"])
      return false;
    }
  }
}
