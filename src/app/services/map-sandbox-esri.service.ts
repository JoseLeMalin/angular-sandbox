import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { catchError, map, Observable, of, tap } from "rxjs";
import { SchemaArcGISApiKey } from "../map-sandbox-esri/map-esri.model";
import { v4 } from "uuid";

@Injectable({
  providedIn: "root",
})
export class MapSandboxEsriService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getArcGisApiKey() {
    return this.http.get(`http://localhost:3000/map-esri`, this.httpOptions).pipe(
      tap(item => console.log(`Get arcGis Api Key:`, item)),
      // map(responseMapEsri => SchemaArcGISApiKey.safeParse(responseMapEsri)),
      map(responseMapEsri => {
        console.log("Reaching here responsemapapiskdbgshjbf: ", responseMapEsri);
        
        return SchemaArcGISApiKey.safeParse(responseMapEsri)}),
      map(responseParsed => {
        console.log("responseParsed getUsers: ", responseParsed);

        if (!responseParsed?.success) {
          throw new Error(responseParsed.error.message);
        }
        if (!responseParsed?.data) {
          return "";
        }
        return responseParsed.data;
      }),
      catchError(this.handleError<string>("getArcGisApiKey", ""))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: Error): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log("User Service - Error: ", error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log("Here is an error log custom before user service", message);

    this.messageService.add({
      key: v4(),
      life: 3000,
      severity: "error",
      summary: "error",
      detail: message,
    });
  }
}
