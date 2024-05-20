import { ApplicationConfig, ErrorHandler, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import routeConfig from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { provideEffects } from "@ngrx/effects";
import { usersReducer } from "./users/store/reducer";
import { UsersEffects } from "./users/store/effects";
import { provideAnimations } from "@angular/platform-browser/animations";
import { GlobalErrorHandlerComponent } from "./core/global-error-handler/global-error-handler.component";
import { MessageService } from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient(),
    provideStore(),
    provideAnimations(),
    provideState({ name: "users", reducer: usersReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([UsersEffects]),
    MessageService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerComponent
    }
  ],
};
