import { Injectable } from "@angular/core";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class EventNotificationService {
  taskIds = [];
  constructor(public toast: ToastrService) {}
  triggerReminder(tasks) {
    tasks.forEach((task) => {
      let diffrence = task.end
        ? moment(task.end).diff(new Date())
        : moment(task.start).diff(new Date());
      if (!this.taskIds.includes(task.id) && diffrence > 0) {
        setTimeout(() => this.toast.success(task.title), diffrence);
        this.taskIds.push(task.id);
      }
    });
  }
}
