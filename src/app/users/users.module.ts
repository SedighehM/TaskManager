import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./components/users/users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { GridModule } from "../ag-grid/ag-grid.module";
import { BtnCellRendererComponent } from "./components/activateComponent/btn-cell-renderer.component";
import { LastDoneTaskComponent } from "./components/last-done-task/last-done-task.component";
import { BrowserModule } from "@angular/platform-browser";
import { DonePercentageComponent } from "./components/done-percentage/done-percentage.component";

@NgModule({
  declarations: [UsersComponent, BtnCellRendererComponent,LastDoneTaskComponent,DonePercentageComponent],
  imports: [GridModule, CommonModule, UsersRoutingModule],
})
export class UsersModule {}
