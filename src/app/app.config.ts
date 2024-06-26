import { ApplicationConfig, ErrorHandler, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import routeConfig from "./app.routes";
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { provideEffects } from "@ngrx/effects";
import { usersReducer } from "./users/store/reducer";
import { UsersEffects } from "./users/store/effects";
import { provideAnimations } from "@angular/platform-browser/animations";
import { GlobalErrorHandlerComponent } from "./core/global-error-handler/global-error-handler.component";
import { MessageService } from "primeng/api";
import { httpErrorInterceptor } from "./core/http-error-interceptor.interceptor";
import { MapEsriEffects } from "./map-sandbox-esri/store/effects";
import { mapEsriFeature } from "./map-sandbox-esri/store/reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient(
      withFetch(),
      // Interceptors order matters
      withInterceptors([httpErrorInterceptor])
    ),
    provideAnimations(),
    provideEffects([UsersEffects, MapEsriEffects]),
    provideStore(),
    provideState({ name: "users", reducer: usersReducer }),
    // provideState(mapEsriFeature),
    // provideState({name: "arcGIS", reducer: mapEsriFeature.reducer}),
    provideState(mapEsriFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    MessageService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerComponent,
    },
  ],
};
