import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import routeConfig from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from "@ngrx/store";

export const appConfig: ApplicationConfig = {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig), provideHttpClient(), provideStore()],
};
