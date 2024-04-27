import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main class="px-8 bg-gray-300">
      <header class="brand-name mb-6 flex-1">
        <div class="w-fit-content">
          <button [routerLink]="['/']">
            <img
              class="brand-logo"
              src="/assets/logo.svg"
              alt="logo"
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      <section class="px-4 flex-1 flex-row">
        <!-- <button pButton class="bg-grey" type="button" clickable>Back</button> -->
        <button
          pButton
          routerLink="/"
          class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg rounded-md w-32 h-7 text-lg focus:ring-violet-300 
             light:from-neutral-300 light:focus:outline-none light:focus:ring 
             dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400 dark:hover:text-black"
          aria-atomic="true"
          aria-details="Back button to reach previous page"
          type="button"
        >
          Back
        </button>
      </section>
      <section class="p-4 content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
