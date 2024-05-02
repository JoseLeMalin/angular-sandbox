import { Component, inject } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Location } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <app-header></app-header>
    <main class="main-container container bg-gray-300 h-full">
      <section class="flex flex-col container h-full gap-4 border-2">
        <div *ngIf="router.url !== '/'" class="flex flex-column pb-2">
          <button
            pButton
            routerLink="/"
            class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg rounded-md w-32 h-7 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring 
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
            aria-atomic="true"
            aria-details="Back button to reach previous page"
            type="button"
            (click)="goBack()">
            Back
          </button>
        </div>
        <div class="router-outlet-class flex border-2 h-full border-cyan-700">
          <router-outlet></router-outlet>
        </div>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: "./app.component.css",
  imports: [CommonModule, HomeComponent, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
  router = inject(Router);
  title = "homes";
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
