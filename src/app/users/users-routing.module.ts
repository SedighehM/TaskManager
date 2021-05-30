import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "users",
      },
      {
        path: "",
        component: UsersComponent,
        data: {
          title: "users",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
