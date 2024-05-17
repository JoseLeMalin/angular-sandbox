import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ToastModule } from "primeng/toast";
import { UIMessage } from "src/app/types/messages.types";

@Component({
  selector: "app-global-toast",
  standalone: true,
  imports: [CommonModule, ToastModule],
  providers: [],
  templateUrl: "./global-toast.component.html",
  styleUrl: "./global-toast.component.css",
})
export class GlobalToastComponent {
  messages: (UIMessage | string)[] = [];
  constructor() {
  }
}
