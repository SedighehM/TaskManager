import { Component, OnDestroy, OnInit } from "@angular/core";
import { HandleBufferService } from "../handleBuffer/handle-buffer.service";

@Component({
  selector: "app-base-form",
  templateUrl: "./base-form.component.html",
  styleUrls: ["./base-form.component.scss"],
})
export class BaseFormComponent implements OnInit, OnDestroy {
  subscription;
  createBufferItem = (d) => {};

  constructor(private buffer: HandleBufferService) {}

  ngOnInit(): void {
    this.subscription = this.buffer.bufferData$.subscribe((data) => {
      this.createBufferItem(data);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
