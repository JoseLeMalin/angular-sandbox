import { CommonModule } from "@angular/common";
import { Component, Inject, Input } from "@angular/core";

@Component({
  selector: "app-featureoutlet",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./featureoutlet.component.html",
  styleUrl: "./featureoutlet.component.css",
})
export class FeatureoutletComponent {
  @Input() message: string = "Default feature message";
  @Input() buttonText: string = "Click me";


  constructor(@Inject('featureConfig') private config: any) {
    if (config) {
      this.message = config.message || this.message;
      this.buttonText = config.buttonText || this.buttonText;
    }
  }

  triggerAction() {
    console.log("Feature component action triggered");
    alert("Action from feature component!");
  }
}
