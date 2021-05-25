import { Injectable, OnInit } from "@angular/core";
import * as moment from "moment";
import { Subject } from "rxjs";
import { EventService } from "../../../calender/services/eventService/event.service";
import { UsersService } from "../usersService/users.service";

@Injectable({
  providedIn: "root",
})
export class TableService {
  tasks = [];
  users = [];
  taskUsers: Subject<any[]> = new Subject();
  constructor(
    private usersService: UsersService,
    private eventsService: EventService
  ) {}
  percentage(total) {
    let counter = 0;
    for (const input of total) {
      if (input.done.doneTask === true) counter += 1;
    }
    return (counter / total.length) * 100;
  }
  closestDoneTask(tasks) {
    var dones = [];
    tasks.forEach((item) => {
      if (item.done.doneTask) {
        var done = { id: null, diff: null };
        done.diff = moment(moment.now()).diff(moment(item.done.doneTime));
        done.id = item.id;
        dones.push(done);
      }
    });
    var min=Math.min.apply(
      Math,
      tasks.map(function (o) {
        return o.diff
      })
    );
    tasks.filter(item=>{item.id})
  }
  createTable() {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
      this.eventsService.getAllEvents().subscribe((response) => {
        this.tasks = response;
        var newData = this.users.map((item, row) => {
          const found = this.tasks.filter(
            (element) => item.username === element.username
          );
          const task = { tasks: Object.values(found) };
          return { ...item, ...task };
        });
        newData.forEach((item) => {
          item.percentage = this.percentage(item.tasks);
        });
        newData.forEach((item) => {
          if (item.tasks.length > 0) {
            item.lastDoneTask = this.closestDoneTask(item.tasks);
          }
        });
        console.log(newData);
        this.taskUsers.next(newData);
      });
    });

    return this.taskUsers;
  }
}
