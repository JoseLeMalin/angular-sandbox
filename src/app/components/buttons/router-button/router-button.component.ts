import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-router-button",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./router-button.component.html",
  styleUrl: "./router-button.component.css",
})
export class RouterButtonComponent {
  @Input() disabled: boolean = false;
  @Input() routerLink!: string;
  constructor() {}
}
