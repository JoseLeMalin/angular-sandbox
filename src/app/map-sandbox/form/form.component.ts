import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonsComponent, FormsModule, TabViewModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  nameTest = new FormControl({
    value: "test SHELL",
    disabled: false,
  });
  formGroup = new FormGroup({
    nameTest: this.nameTest,
  });
  constructor() {}
  functioncall(e: MouseEvent) {
    console.log("event in the functioncall parent", this.nameTest.value, e);
  }

  onSubmit(form: NgForm) {
    console.log("Form submitted", form);
  }
}
