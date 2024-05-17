import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { RouterButtonComponent } from "@components/buttons/router-button/router-button.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, RouterButtonComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  constructor() {}
  readonly router = inject(Router);
}
