import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";

const failedData = [];
@Injectable({
  providedIn: "root",
})
export class HandleBufferService {
  constructor(private toast: ToastrService) {}
  _bufferData: any[]=[];
  public readonly bufferData$ = new Subject();

  public handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      this.toast.error(err.message, err.status.toString());
      // let type = req.headers.get("type");
      // if (type === "insertEvent") {
      //   let config = {
      //     operator: (data) => {
      //       return this.eventService.insertEvent(data);
      //     },
      //     object: req.body,
      //     type: type,
      //     done: () => {},
      //   };
      //   this.bufferService.add(config);
      // }
    }
  }
  add(data,err) {
    data.error=err;
    this._bufferData.push({data})
    this.bufferData$ .next(this._bufferData);
  }
}
