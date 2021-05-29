import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  addDays,
  addMonths,
  addWeeks,
  subDays,
  subMonths,
  subWeeks,
} from "date-fns";
import { Subject } from "rxjs";
import { EventService } from "../../services/eventService/event.service";
import { CalenderFormComponent } from "../calender-from/calender-form.component";
import { CalendarEvent, CalendarEventAction } from "angular-calendar";
import * as moment from "moment";
import { TaskLogComponent } from "../task-log/task-log.component";
import { RegisterService } from "../../../register/services/register.service";
import { EventNotificationService } from "../../services/eventNotificationService/event-notification.service";
import { DoneformComponent } from "../doneform/doneform.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-calender",
  templateUrl: "./calender.component.html",
  styleUrls: ["./calender.component.scss"],
})
export class CalenderComponent implements OnInit {
  constructor(
    private notificationService: EventNotificationService,
    private modalService: NgbModal,
    private eventService: EventService,
    private registerService: RegisterService,
    private router:ActivatedRoute
  ) {}
  view: string = "week";
  public refresh: Subject<any> = new Subject();
  showCreate: boolean = false;
  users = [];
  selectedPerson;
  user;

  viewDate: Date = new Date();
  @Input() eventActionsTemplate: TemplateRef<any>;
  adminActions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.updateEvent(event);
      },
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.removeEvent(event.id);
      },
    },
  ];
  userActions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil-square"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.addLog(event);
      },
    },
    {
      label: '<i class="fa fa-fw fa-check"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.donTask(event);
      },
    },
  ];

  activeDayIsOpen: boolean = true;
  events: CalendarEvent[] = [];
  ngOnInit(): void {
    this.user = localStorage.getItem("username");
    this.Buildevents(this.user);
    if (this.user === "Admin") this.showCreate = true;
    this.registerService.getUsers().subscribe((response) => {
      this.users = response;
      this.users.splice(0, 1);
    });
  }

  increment(): void {
    const addFn: any = {
      day: addDays,
      week: addWeeks,
      month: addMonths,
    }[this.view];

    this.viewDate = addFn(this.viewDate, 1);
  }
  decrement(): void {
    const subFn: any = {
      day: subDays,
      week: subWeeks,
      month: subMonths,
    }[this.view];

    this.viewDate = subFn(this.viewDate, 1);
  }

  today(): void {
    this.viewDate = new Date();
  }
  Buildevents(user) {
    this.events = [];
    this.eventService.getEvents(user).subscribe((events) => {
      events.forEach((e) => {
        e.start = moment(e.start).toDate();
        e.end = moment(e.end).toDate();
        if (moment(e.end).diff(moment(new Date()), "days") < 1) {
          e.color = this.eventService.colors.red;
        }
        if (user === "Admin") {
          e.actions = this.adminActions;
        } else {
          e.actions = this.userActions;
        }
        if (e.done && e.done.doneTask) {
          e.color = this.eventService.colors.gray;
          e.actions = [];
        }
        this.events.push(e);
        this.notificationService.triggerReminder(this.events);
      });
      this.refresh.next();
    });
  }

  addLog(event) {
    let dialogRef = this.modalService.open(TaskLogComponent, {
      centered: true,
    });
    dialogRef.componentInstance.logs = event.logs;
    dialogRef.componentInstance.Done.subscribe((data) => {
      event.logs.push(data);
      this.eventService.editEvent(event, event.id).subscribe((response) => {
        this.refresh.next(true);
        this.modalService.dismissAll();
        this.Buildevents(this.user);
      });
    });
  }
  addEvent() {
    let dialogRef = this.modalService.open(CalenderFormComponent, {
      centered: true,
    });
    dialogRef.componentInstance.buildForm(null);
    dialogRef.componentInstance.Done.subscribe((data) => {
      this.eventService.insertEvent(data).subscribe((response) => {
        this.refresh.next(true);
        this.modalService.dismissAll();
        this.Buildevents(this.user);
      });
    });
  }
  removeEvent(id) {
    this.eventService.deleteEvent(id).subscribe((response) => {
      this.Buildevents(this.user);
    });
  }
  updateEvent(event) {
    let dialogRef = this.modalService.open(CalenderFormComponent, {
      centered: true,
    });
    dialogRef.componentInstance.buildForm(event);
    dialogRef.componentInstance.Done.subscribe((data) => {
      this.eventService.editEvent(data, event.id).subscribe((response) => {
        this.refresh.next(true);
        this.modalService.dismissAll();
        this.Buildevents(this.user);
      });
    });
  }
  donTask(event) {
    let dialogRef = this.modalService.open(DoneformComponent, {
      centered: true,
    });
    dialogRef.componentInstance.Done.subscribe((data) => {
      event.done = data;

      this.eventService.editEvent(event, event.id).subscribe((response) => {
        this.refresh.next(true);
        this.modalService.dismissAll();
        this.Buildevents(this.user);
      });
    });
  }
}
