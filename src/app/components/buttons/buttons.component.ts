import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-buttons",
  standalone: true,
  imports: [],
  templateUrl: "./buttons.component.html",
  styleUrl: "./buttons.component.css",
})
export class ButtonsComponent {
  // fnToProcess = inject((test: string) => {
  //   console.log(test);
  // });
  @Output() clickEvent = new EventEmitter<MouseEvent>();
  @Input() disabled: boolean = false;
  @Input() label!: string;

  constructor() {
    if (!this.label) {
      this.label = "default";
    }
  }
  onClickAction(event: MouseEvent) {
    console.log("event in the button comp", event);

    this.clickEvent.emit(event);
  }
  /* processFunction = () => {
    this.fnToProcess();
  }; */
}
