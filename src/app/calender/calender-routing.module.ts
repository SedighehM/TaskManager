import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalenderComponent } from "./components/calender/calender.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CalenderComponent,
        data: {
          title: "calender",
        },
      },
    ],
  },
  {
    path: "task/:id",
    component: CalenderComponent,
    data: {
      title: "calender",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderRoutingModule {}
