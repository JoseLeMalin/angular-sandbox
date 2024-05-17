import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Component({
  selector: "app-http-error-interceptor",
  standalone: true,
  imports: [],
  templateUrl: "./http-error-interceptor.component.html",
  styleUrl: "./http-error-interceptor.component.css",
})
export class HttpErrorInterceptorComponent implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("Error: ", error);

        // Handle the error
        return throwError(() => new Error(error.message));
      })
    );
  }
}
