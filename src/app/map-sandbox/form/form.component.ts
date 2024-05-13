import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { TabViewModule } from "primeng/tabview";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonsComponent, FormsModule, TabViewModule, DividerModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  cityName = new FormControl({
    value: "test SHELL",
    disabled: false,
  });
  population = new FormControl({
    value: -1,
    disabled: false,
  });
  latitude = new FormControl({
    value: 0,
    disabled: false,
  });
  longitude = new FormControl({
    value: 0,
    disabled: false,
  });
  formGroup = new FormGroup({
    cityName: this.cityName,
    population: this.population,
    coordinates: new FormGroup({
      latitude: this.latitude,
      longitude: this.longitude,
    }),
  });
  constructor() {}
  functioncall(e: MouseEvent) {
    console.log("event in the functioncall parent", this.cityName.value, e);
  }

  onSubmit() {
    console.log("Form submitted", this.formGroup.value);
  }
}
