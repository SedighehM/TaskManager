import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from "../../services/register.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router,private registerService:RegisterService) {}
  registerForm: FormGroup;

  ngOnInit():void {
    this.registerForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      isAdmin: new FormControl(false),
    });
  }
  save(form) {
    this.registerService.registerUser(form).subscribe((response) => {
      this.backtoLogin();
    });
  }
  backtoLogin() {
    this.router.navigateByUrl("/login");
  }
}
