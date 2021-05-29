import { Injectable } from "@angular/core";
import { EventNotificationService } from "../eventNotificationService/event-notification.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(
    private eventNotification: EventNotificationService,
    private http: HttpClient
  ) {}
  colors: any = {
    red: {
      primary: "#ad2121",
      secondary: "#FAE3E3",
    },
    blue: {
      primary: "#1e90ff",
      secondary: "#D1E8FF",
    },
    yellow: {
      primary: "#e3bc08",
      secondary: "#FDF1BA",
    },
    gray: {
      primary: "#E1DFDF",
      secondary: "#E1DFDF",
    },
  };

  getEvents(username): Observable<any> {
    if (username === "Admin") {
      return this.http.get("//localhost:3000/events");
    } else {
      return this.http.get("//localhost:3000/events?username=" + username);
    }
  }
  getAllEvents():Observable<any>{
    return this.http.get(("//localhost:3000/events"))

  }
  getEventsById(id):Observable<any>{
    return this.http.get("//localhost:3000/events/" + id)
  }
  editEvent(event, id): Observable<any> {
    return this.http.put("//localhost:3000/events/" + id, event);
  }
  insertEvent(newEvent): Observable<any> {
    let event = {
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      title: newEvent.title,
      username: newEvent.username,
      color: newEvent.end ? this.colors.blue : this.colors.yellow,
      done: newEvent.done,
      logs: newEvent.logs
    };
    return this.http.post("//localhost:3000/events", event);
  }
  deleteEvent(id): Observable<any> {
    return this.http.delete("//localhost:3000/events/" + id);
  }
}
