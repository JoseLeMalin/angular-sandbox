import { Component } from "@angular/core";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-global-toast",
  standalone: true,
  imports: [ToastModule],
  providers: [],
  templateUrl: "./global-toast.component.html",
  styleUrl: "./global-toast.component.css",
})
export class GlobalToastComponent {
  constructor() {}
}
