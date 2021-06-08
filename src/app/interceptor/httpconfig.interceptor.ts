import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable} from "rxjs";
import { HandleBufferService } from "../handleBuffer/handle-buffer.service";
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private buffer: HandleBufferService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((observer) => {
      next.handle(req).subscribe(
        (res: HttpResponse<any>) => {
          if (res instanceof HttpResponse) {
            observer.next(res);
          }
        },
        (err: HttpErrorResponse) => {
                  if(req.headers.get('type'))this.buffer.add(req,err)
        }
      );
    });
  }
}
