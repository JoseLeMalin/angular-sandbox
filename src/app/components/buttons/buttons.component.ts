import { Component, EventEmitter, Output } from "@angular/core";

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
  constructor() {
    // this.fnToProcess = () => {};
    console.log("In the constructor");
  }
  onClickAction(event: MouseEvent) {
    console.log("event in the button comp", event);

    this.clickEvent.emit(event);
  }
  /* processFunction = () => {
    this.fnToProcess();
  }; */
}
