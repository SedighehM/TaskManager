import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get("http://localhost:3000/users");
  }
  updateUser(user, id): Observable<any> {
    return this.http.put("http://localhost:3000/users/" + id, user);
  }}
