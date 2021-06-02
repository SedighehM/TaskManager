import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { BufferService } from "../../bufferService/buffer.service";
import { EventService } from "../../calender/services/eventService/event.service";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  user;
  events;
  constructor(
    private eventService: EventService,
    private router: Router,
    public bufferService: BufferService
  ) {
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
  saveTask(data,i) {
    let submit = data.operator;
    submit(data.object).subscribe((response) => {
      data.done();
      this.bufferService.remove(i)
    });
  }
}
