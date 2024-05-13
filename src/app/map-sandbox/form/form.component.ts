import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonsComponent } from "../../components/buttons/buttons.component";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonsComponent, FormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  constructor() {}
  nameTest = new FormControl({
    value: "test SHELL",
    disabled: false,
  });
  formGroup = new FormGroup({
    nameTest: this.nameTest,
  });
  functioncall(e: MouseEvent) {
    console.log("event in the functioncall parent", this.nameTest.value, e);
  }
}
