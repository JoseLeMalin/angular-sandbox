import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterModule],
  template: `
    <main class="bg-gray-300 h-full">
      <header class="brand-name container flex flex-column mb-6 gap-6">
        <nav class="flex flex-row gap-6">
          <div class="logo-class flex-none">
            <button [routerLink]="['/']">
              <img
                class="brand-logo"
                src="/assets/logo.svg"
                alt="logo"
                aria-hidden="true" />
            </button>
          </div>
          <div
            class="heroes-btn-class flex-initial justify-center align-middle">
            <button
              pButton
              class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg rounded-md w-32 h-7 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring 
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
              [routerLink]="['/heroes']">
              Go to Heroes
            </button>
          </div>
          <div
            class="heroes-btn-class flex-initial justify-center align-middle">
            <button
              pButton
              class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg rounded-md w-32 h-7 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring 
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
              [routerLink]="['/messages']">
              Go to Messages
            </button>
          </div>
          <div
            class="heroes-btn-class flex-initial justify-center align-middle">
            <button
              pButton
              class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg rounded-md w-32 h-15 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring 
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
              [routerLink]="['/dashboard']">
              Go to Dashboard
            </button>
          </div>
        </nav>
      </header>

      <section class="flex flex-col container p-4 gap-4 h-max">
        <div *ngIf="router.url !== '/'" class="py-4 flex-1 flex-column">
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
        <div class="h-full">
          <router-outlet></router-outlet>
        </div>
      </section>
      <footer
        class="brand-name container bg-slate-400 flex flex-column mt-2 pt-2gap-6">
        <div class="logo-class flex-none">
          <button [routerLink]="['/']">
            <img
              class="brand-logo"
              src="/assets/logo.svg"
              alt="logo"
              aria-hidden="true" />
          </button>
        </div>
        <div class="heroes-btn-class flex-initial justify-center align-middle">
          <button
            pButton
            class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg rounded-md w-32 h-7 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring 
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
            [routerLink]="['/heroes']">
            Go to Heroes
          </button>
        </div>
      </footer>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  router = inject(Router);
  title = 'homes';
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
