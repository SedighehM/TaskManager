import { Component, OnInit } from "@angular/core";
import { EventService } from "../../calender/services/eventService/event.service";
import { UsersService } from "../../users/services/usersService/users.service";

@Component({
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  doneTasks;
  unfinishedTasks;
  public doneChartLabels: string[] = ["Done Tasks", "Unfinished tasks"];
  public doneChartData: number[] = [3, 3];
  public pieChartType = "pie";

  public userTaskChartLabels: string[] = ["Done Tasks", "Unfinished tasks"];
  public userTaskChartData: number[] = [3, 3];

  constructor(
    private eventService: EventService,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    this.createDoneTasks();
    this.createUserTask();
  }
  createDoneTasks() {
    this.eventService.getAllEvents().subscribe((response) => {
      this.doneTasks = response.filter((task) => {
        return task.done.doneTask == true;
      }).length;
      this.unfinishedTasks = response.length - this.doneTasks;
      this.doneChartData = [this.doneTasks, this.unfinishedTasks];
    });
  }
  createUserTask() {
    this.usersService.getUsers().subscribe((userResponse) => {
      this.eventService.getAllEvents().subscribe((taskResponse) => {
        var newData = userResponse.joinArray(taskResponse, "username");
        this.userTaskChartLabels = [];
        this.userTaskChartData = [];
        this.barChartData = [];
        newData.forEach((item) => {
          this.userTaskChartLabels.push(item.username);
          this.userTaskChartData.push(item.tasks.length);
          let temp = { data: null, label: null };
          temp.label = item.username;
          let score = 0;

          item.tasks.forEach((i) => {
            if(i.done.score)
            score += i.done.score;
          });
          temp.data = [score];
          this.barChartData.push(temp);
        });
      });
    });
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartType = "bar";

  public barChartData: any[] = [
    { data: [65], label: "Series A" },
    { data: [28], label: "Series B" },
  ];
}
