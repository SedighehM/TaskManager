import { Component, OnInit } from "@angular/core";
import { TableService } from "../../services/tableService/table.service";
import { BtnCellRendererComponent } from "../activateComponent/btn-cell-renderer.component";
import { DonePercentageComponent } from "../done-percentage/done-percentage.component";
import { LastDoneTaskComponent } from "../last-done-task/last-done-task.component";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  constructor(public tableService: TableService) {}
  columnDefs = [
    { headerName: "UserName", field: "username", minWidth: "300" },
    { headerName: "Email", field: "email", minWidth: "300" },
    {
      headerName: "Done Tasks(%)",
      cellRendererFramework: DonePercentageComponent,
      minWidth: "200",
    },
    {
      headerName: "Last Done Task",
      cellRendererFramework: LastDoneTaskComponent,
      minWidth: "200",
    },
    {
      headerName: "Operation",
      cellRendererFramework: BtnCellRendererComponent,
      minWidth: "200",
    },
  ];
  ngOnInit(): void {}
}
