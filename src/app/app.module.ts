import { ErrorHandler, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { GlobalErrorHandlerComponent } from "./core/global-error-handler/global-error-handler.component";
import { GlobalToastComponent } from "@components/toasts/global-toast/global-toast.component";
import { ToastModule } from "primeng/toast";
import { MessageService } from 'primeng/api'


@NgModule({
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerComponent,
    },
    MessageService,
  ],
  imports: [
    CommonModule,
    AppComponent,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesComponent,
    HttpClientModule,
    StoreModule.forRoot({}),
    GlobalToastComponent,
    ToastModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false,
    // }),
  ],
})
export class AppModule {}
