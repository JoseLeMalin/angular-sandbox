import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";

@Component({
  selector: "app-http-error-interceptor",
  standalone: true,
  imports: [],
  templateUrl: "./http-error-interceptor.component.html",
  styleUrl: "./http-error-interceptor.component.css",
})
export class HttpErrorInterceptorComponent implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => {
        console.log("Error handled by HttpErrorInterceptorComponent tap");
      }),
      catchError((error: HttpErrorResponse) => {
        console.log("Error HttpErrorInterceptorComponent: ", error);

        // Handle the error
        return throwError(() => {
          console.error("Error rethrown from HttpErrorInterceptorComponent: ", error);

          return new Error(error.message);
        });
      })
    );
  }
}
