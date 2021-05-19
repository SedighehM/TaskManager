import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  registerUser(newUser: any): Observable<any> {
    return this.http.post("//localhost:3000/users", newUser);
  }
  getByUserName(username): Observable<any> {
    return this.http.get("//localhost:3000/users?username="+username);
  }
  getUsers():Observable<any>{
    return this.http.get("//localhost:3000/users")
  }
}
