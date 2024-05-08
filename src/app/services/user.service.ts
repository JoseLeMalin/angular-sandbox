import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";
import { MessageService } from "./message.service";
import { z } from "zod";
import { User } from "../dashboard/dashboard.component";
import { Role } from "../store/reducers/users.reducers";

const SchemaUser = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  role: z.nativeEnum(Role),
});
const SchemaUsers = z.array(SchemaUser);
// type UserInfered = z.infer<typeof SchemaUser>;

@Injectable({
  providedIn: "root",
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getUsers() {
    return this.http.get(`http://localhost:3000/users`, this.httpOptions).pipe(
      tap(item => console.log(`getUsers Api users: ${item}`)),
      map(responseUsers => SchemaUsers.safeParse(responseUsers)),
      map(responseParsed => {
        console.log("responseParsed getUsers: ", responseParsed);

        if (!responseParsed?.success) {
          throw new Error(responseParsed.error.message);
        }
        if (!responseParsed?.data) {
          return [];
        }
        return responseParsed.data;
      }),
      catchError(this.handleError("searchHeroes", []))
    );
  }
  /* getUsersBis() {
    this.store.dispatch(getUsers())
  } */
  getUser(id: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users/${id}`, this.httpOptions).pipe(
      tap(item => console.log(`fetched hero id=${id} ${item}`)),
      map(response => SchemaUser.parse(response)),
      map(resParsed => resParsed)
      // catchError(this.handleError("searchHeroes", []))
    );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: Error): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log("Here is an error", error); // log to console instead
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
