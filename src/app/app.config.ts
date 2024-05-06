import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import routeConfig from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { usersReducer } from "./store/reducers/users.reducers";

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient(),
    provideStore(),
    provideState({ name: "users", reducer: usersReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
