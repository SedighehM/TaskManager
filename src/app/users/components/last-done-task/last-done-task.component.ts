import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AgRendererComponent } from "ag-grid-angular";
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from "ag-grid-community";

@Component({
  selector: "app-last-done-task",
  templateUrl: "./last-done-task.component.html",
  styleUrls: ["./last-done-task.component.scss"],
})
export class LastDoneTaskComponent implements OnInit, AgRendererComponent {
  constructor(private router: Router) {}
  data;
  refresh(params: ICellRendererParams): boolean {
    throw new Error("Method not implemented.");
  }
  agInit(params: ICellRendererParams): void {debugger
    this.data = params.data;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }
  goToCalender() {
    this.router.navigateByUrl("/calender/calender")  }

  ngOnInit(): void {}
}
