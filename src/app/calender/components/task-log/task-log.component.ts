import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { EventService } from "../../services/eventService/event.service";

@Component({
  selector: "app-task-log",
  templateUrl: "./task-log.component.html",
  styleUrls: ["./task-log.component.scss"],
})
export class TaskLogComponent implements OnInit {
  logForm: FormGroup;
  @Output() Done = new EventEmitter();
  logs = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.logForm = new FormGroup({
      time: new FormControl(null),
      discription: new FormControl(null),
    });
  }
  save(form) {
    if (this.logForm.valid) this.Done.emit(form);
  }
}
