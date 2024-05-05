import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getUsers(): Observable<any> {
    return this.http.get(`http://localhost:3000/users`, this.httpOptions).pipe(
      tap(item => console.log(`getUsers Api users: ${item}`)),
      
      catchError(this.handleError("searchHeroes", []))
    );
  }
  getUser(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${id}`, this.httpOptions).pipe(
      tap(item => console.log(`fetched hero id=${id} ${item}`)),
      // catchError(this.handleError("searchHeroes", []))
    );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: Error): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
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
