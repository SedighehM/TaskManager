import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { RegisterService } from "../../services/register.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toast: ToastrService
  ) {}
  loginForm: FormGroup;
  showErrorMessage: boolean = false;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  gotoRegister() {
    this.router.navigateByUrl("/register");
  }
  save(form) {
    this.showErrorMessage = false;
    this.registerService.getByUserName(form.username).subscribe((response) => {
      if (response[0]) {
        if (response[0].username === "Admin" || response[0].active === true) {
          this.router.navigateByUrl("/dashboard");
          localStorage.setItem("username", form.username);
        } else {
          this.toast.error("User is not active");
        }
      } else {
        this.showErrorMessage = true;
      }
    });
  }
}
