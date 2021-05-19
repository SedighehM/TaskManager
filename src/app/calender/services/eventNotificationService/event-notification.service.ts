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
      debugger;
      let diffrence = moment(task.end).diff(new Date());
      if (!this.taskIds.includes(task.id)) {
        setTimeout(() => this.toast.success(task.title), diffrence);
        this.taskIds.push(task.id);
      }
    });
  }
}
