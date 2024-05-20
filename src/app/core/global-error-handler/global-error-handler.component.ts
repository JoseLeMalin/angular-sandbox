import { Component, NgZone } from "@angular/core";
import { ErrorHandler } from "@angular/core";

/* Mastering Error Handling in Angular: A Comprehensive Guide
https://yon.fun/angular-error-handle/ */

@Component({
  selector: "app-global-error-handler",
  standalone: true,
  imports: [],
  templateUrl: "./global-error-handler.component.html",
  styleUrl: "./global-error-handler.component.css",
})
export class GlobalErrorHandlerComponent implements ErrorHandler {
constructor(private zone: NgZone) {}

  handleError(error: Error) {
    this.zone.run(() => {
      console.log(error);
      
    })
    console.error("Do we have anything here?")
    // Custom error handling logic
    // throw error;
  }

  // observable.pipe(
  //   catchError(error => {
  //     // Complete the Observable chain here, don't send anything further
  //     return EMPTY;
  //   })
  // );
}
