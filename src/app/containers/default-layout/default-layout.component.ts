import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { EventService } from "../../calender/services/eventService/event.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  user;
  events;
  constructor(private eventService: EventService, private router: Router) {
    this.user = localStorage.getItem("username");
  }
  ngOnInit() {
    this.eventService.getEvents(this.user).subscribe((response) => {
      this.events = response.filter((item) => {
        return moment(item.start).isSame(moment(), "day");
      });
      console.log(this.events);
    });
  }
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut() {
    localStorage.removeItem("username");
    this.router.navigateByUrl("/login");
  }
}
