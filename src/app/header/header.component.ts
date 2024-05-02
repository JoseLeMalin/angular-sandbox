import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  constructor() {}
  router = inject(Router);
}
