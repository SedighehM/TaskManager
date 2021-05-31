import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import { RegisterService } from "../../../register/services/register.service";

@Component({
  selector: "app-calender-form",
  templateUrl: "./calender-form.component.html",
  styleUrls: ["./calender-form.component.scss"],
})
export class CalenderFormComponent implements OnInit {
  @Output() Done = new EventEmitter();
  users = [];

  constructor(private registerService: RegisterService) {}
  taskForm: FormGroup;
  task: boolean = true;
  submitted = false;

  ngOnInit(): void {
    this.registerService.getUsers().subscribe((response) => {
      this.users = response;
      this.users.splice(0, 1);
    });
  }
  buildForm(data = undefined) {
    this.taskForm = new FormGroup({
      start: new FormControl(
        data ? moment(data.start).format("yyyy-MM-DDTHH:mm") : null,
        [Validators.required]
      ),
      end: new FormControl(
        data ? moment(data.end).format("yyyy-MM-DDTHH:mm") : null,
        [Validators.required]
      ),
      title: new FormControl(data ? data.title : null, [Validators.required]),
      username: new FormControl(data ? data.username : null, [
        Validators.required,
      ]),
      done: new FormGroup({
        doneTask: new FormControl(false),
        doneTime: new FormControl(undefined),
      }),
      logs: new FormControl(data && data.logs.length >= 0 ? data.logs : []),
    });
  }
  buildTaskForm() {
    this.task = true;
    this.taskForm.controls["end"].setValidators(Validators.required);
  }
  buildReminderFrom() {
    this.task = false;
    this.taskForm.controls.end.clearValidators();
    this.taskForm.controls.end.setErrors(null);
  }
  save(form) {
    this.submitted = true;
    if (this.taskForm.valid) this.Done.emit(form);
  }
}
