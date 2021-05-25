import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AgRendererComponent } from "ag-grid-angular";
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from "ag-grid-community";

@Component({
  selector: "app-done-percentage",
  templateUrl: "./done-percentage.component.html",
  styleUrls: ["./done-percentage.component.scss"],
})
export class DonePercentageComponent implements OnInit, AgRendererComponent {
  constructor(private router: Router) {}
  data;
  refresh(params: ICellRendererParams): boolean {
    throw new Error("Method not implemented.");
  }
  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }
  goToCalender() {
    this.router.navigateByUrl("/calender/calender")
  }

  ngOnInit(): void {}
}
