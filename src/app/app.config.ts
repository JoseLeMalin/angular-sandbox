import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import routeConfig from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
};
