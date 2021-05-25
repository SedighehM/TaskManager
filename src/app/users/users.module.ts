import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./components/users/users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { GridModule } from "../ag-grid/ag-grid.module";
import { BtnCellRendererComponent } from "./components/activateComponent/btn-cell-renderer.component";
import { LastDoneTaskComponent } from "./components/last-done-task/last-done-task.component";

@NgModule({
  declarations: [UsersComponent, BtnCellRendererComponent,LastDoneTaskComponent],
  imports: [GridModule, CommonModule, UsersRoutingModule],
})
export class UsersModule {}
