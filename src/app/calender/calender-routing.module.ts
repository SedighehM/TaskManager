import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalenderComponent } from "./components/calender/calender.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "calender",
      },
      {
        path: "calender",
        component: CalenderComponent,
        data: {
          title: "calender",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderRoutingModule {}
