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
        <a [routerLink]="['/']">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </a>
      </header>

      <section class="px-4">
        <a routerLink="/">
          <!-- <button pButton class="bg-grey" type="button" clickable>Back</button> -->
          <button
            pButton
            class="bg-purple-500 text-white hover:bg-sky-400 hover:text-black rounded-md w-32 h-7 text-lg from-neutral-300"
            type="button"
          >
            Back
          </button>
        </a>
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
