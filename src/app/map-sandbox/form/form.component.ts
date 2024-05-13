import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ButtonsComponent } from "../../components/buttons/buttons.component";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonsComponent],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  constructor() {}
  name = new FormControl("");
}
