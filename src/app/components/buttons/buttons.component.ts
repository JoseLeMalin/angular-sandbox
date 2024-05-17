import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-buttons",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./buttons.component.html",
  styleUrl: "./buttons.component.css",
})
export class ButtonsComponent {
  // fnToProcess = inject((test: string) => {
  //   console.log(test);
  // });
  @Input() disabled: boolean = false;
  @Input() label!: string;
  @Input() routerLink!: string;
  @Output() clickEvent = new EventEmitter<MouseEvent>();

  constructor() {
    if (!this.label) {
      this.label = "default";
      this.routerLink = this.routerLink || "";
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
