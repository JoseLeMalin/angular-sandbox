import { Component, inject } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Location } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { GlobalToastComponent } from "./components/toasts/global-toast/global-toast.component";

@Component({
    selector: "app-root",
    standalone: true,
    providers: [MessageService],
    template: `
    <app-header></app-header>
    <!-- <p-toast position="top-center" (onClose)="onReject()" /> -->
    <app-global-toast></app-global-toast>
    <main class="main-container bg-gray-300">
      <section class="flex flex-col gap-4 border-2">
        <div *ngIf="router.url !== '/'" class="flex flex-column pb-2">
          <button
            pButton
            routerLink="/"
            class="bg-violet-500 text-gray-100 hover:bg-sky-400 
            hover:text-black shadow-lg rounded-md w-32 h-7 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring ring-2 ring-pink-300
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
            aria-atomic="true"
            aria-details="Back button to reach previous page"
            type="button"
            (click)="goBack()">
            Back
          </button>
        </div>
        <div class="router-outlet-class flex border-2 size-full border-cyan-700 bg-">
          <router-outlet></router-outlet>
        </div>
      </section>
      <div>
        <button (click)="throwError()">Throw</button>
      </div>
    </main>
    <app-footer></app-footer>
  `,
    styleUrl: "./app.component.css",
    imports: [
        CommonModule,
        HomeComponent,
        ToastModule,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        GlobalToastComponent,
    ]
})
export class AppComponent {
  readonly router = inject(Router);
  readonly title = "Angular Sandbox";
  constructor(
    private location: Location,
    private messageService: MessageService
  ) {}

  goBack() {
    this.location.back();
  }
  throwError() {
    this.messageService.add({ severity: "error", summary: "error", detail: "Message Content" });
    // throw(new Error('Throw error'))
    // this.messageService.add({ severity: "success", summary: "Success", detail: "Message Content" });
  }
  onReject() {
    this.messageService.clear("confirm");
  }
}
