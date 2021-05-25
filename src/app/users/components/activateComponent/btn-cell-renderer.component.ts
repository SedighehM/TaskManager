import { Component, OnDestroy, OnInit } from "@angular/core";
import { AgRendererComponent, ICellRendererAngularComp } from "ag-grid-angular";
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from "ag-grid-community";
import { UsersService } from "../../services/usersService/users.service";

@Component({
  selector: "app-btn-cell-renderer",
  templateUrl: "./btn-cell-renderer.component.html",
  styleUrls: ["./btn-cell-renderer.component.scss"],
})
export class BtnCellRendererComponent implements OnInit, AgRendererComponent {
  constructor(private userService: UsersService) {}
  data;
  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }
  activationUser() {
    this.data.active = !this.data.active;
    delete this.data.tasks;
    delete this.data.percentage;
    this.userService
      .updateUser(this.data, this.data.id)
      .subscribe((response) => {});
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {}
  ngOnInit() {}
}
