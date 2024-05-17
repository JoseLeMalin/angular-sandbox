import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BaseButtonComponent } from "@components/buttons/base-button/base-button.component";
import { RouterButtonComponent } from "@components/buttons/router-button/router-button.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, FooterComponent, BaseButtonComponent, RouterButtonComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor() {}
  clicked() {
    console.log("clicked");
  }
}
