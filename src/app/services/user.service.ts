import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { MessageService } from "./message.service";
import { User } from "../dashboard/dashboard.component";
import { z } from "zod";

const SchemaUser = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
  })
);
type UserInfered = z.infer<typeof SchemaUser>;

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
      map(responseUsers => SchemaUser.safeParse(responseUsers)),
      map(responseParsed => {
        console.log("responseParsed: ", responseParsed);
        
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
  getUser(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${id}`, this.httpOptions).pipe(
      tap(item => console.log(`fetched hero id=${id} ${item}`))
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
