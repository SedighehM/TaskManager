import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
const data = [];
@Injectable({
  providedIn: "root",
})
export class BufferService {
  private _data: any = new BehaviorSubject(data);
  public readonly data$ = this._data.asObservable();

  constructor() {}

  add(data) {debugger
    const tempData = this._data.getValue();
    tempData.push({ data });

    this._data.next(tempData);
  }

  remove(index) {
    const tempData = this._data
      .getValue()
      .filter((el, elIndex) => elIndex !== index);

    this._data.next(tempData);
  }
}
