import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonsComponent } from "@components/buttons/buttons.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, FooterComponent, ButtonsComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor() {}
  clicked() {
    console.log("clicked");
  }
}
