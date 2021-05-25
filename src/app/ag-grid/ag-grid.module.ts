import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { MyTableComponent } from "./my-table/my-table.component";

@NgModule({
  declarations: [MyTableComponent],
  imports: [CommonModule, AgGridModule.withComponents([])],
  exports:[MyTableComponent]
})
export class GridModule {}
