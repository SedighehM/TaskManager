import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-my-table",
  templateUrl: "./my-table.component.html",
  styleUrls: ["./my-table.component.scss"],
})
export class MyTableComponent implements OnInit {
  @Input() serviceTable;
  @Input() columnDefs;

  rowData :any;

  constructor() {}

  ngOnInit(): void {
    this.rowData=this.serviceTable.createTable();
  }
}
