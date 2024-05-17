import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-base-button",
  standalone: true,
  imports: [],
  templateUrl: "./base-button.component.html",
  styleUrl: "./base-button.component.css",
})
export class BaseButtonComponent {
  @Input() disabled: boolean = false;
  @Input() label!: string;
  @Output() clickEvent = new EventEmitter<MouseEvent>();
  constructor() {
    if (!this.label) {
      this.label = "default";
    }
  }
  onClickAction(event: MouseEvent) {
    console.log("event in the button comp", event);

    this.clickEvent.emit(event);
  }
}
