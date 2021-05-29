import { Injectable } from "@angular/core";
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
  closestDoneTask(tasks) {
    var doneTasks = tasks.filter((task) => {
      return task.done.doneTask;
    });
    var sortedTasks = doneTasks.sort(function (a, b) {
      var dateA = new Date(a.done.doneTime).getTime();
      var dateB = new Date(b.done.doneTime).getTime();
      return dateA > dateB ? 1 : -1;
    });
    return sortedTasks[sortedTasks.length - 1];
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
        newData.percentage();
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
