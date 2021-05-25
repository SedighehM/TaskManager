import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-doneform",
  templateUrl: "./doneform.component.html",
  styleUrls: ["./doneform.component.scss"],
})
export class DoneformComponent implements OnInit {
  doneForm: FormGroup;
  submitted = false;
  @Output() Done = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.doneForm = new FormGroup({
      doneTime: new FormControl(null),
      doneTask: new FormControl(true),
    });
  }
  save(form) {
    this.submitted = true;
    if (this.doneForm.valid) this.Done.emit(form);
  }
}
