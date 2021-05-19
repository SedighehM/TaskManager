import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "convertDate",
})
export class ConvertDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return moment(value).format('yyyy-mm-DD hh:mm');
  }
}
