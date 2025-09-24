import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-base-button",
  standalone: true,
  imports: [],
  // templateUrl: "./base-button.component.html",
  template: `
    <button
      class="bg-violet-500 text-gray-100 hover:bg-sky-400 hover:text-black shadow-lg 
      rounded-md text-lg focus:ring-violet-300 light:from-neutral-300 light:focus:outline-none 
      light:focus:ring dark:bg-purple-500 dark:text-white dark:hover:bg-sky-400
       dark:hover:text-black"
      pButton
      (click)="onClickAction($event)"
      (type)="(type)">
      <ng-content />
    </button>
  `,
  styleUrl: "./base-button.component.css",
})
export class BaseButtonComponent {
  @Input() disabled: boolean = false;
  @Input() label!: string;
  @Input({ required: true }) type!: string;
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
