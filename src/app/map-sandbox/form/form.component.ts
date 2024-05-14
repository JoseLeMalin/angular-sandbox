import { Component, inject } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from "@angular/forms";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { TabViewModule } from "primeng/tabview";
import { DividerModule } from "primeng/divider";

type FormCity = FormGroup<{
  cityName: FormControl<string>;
  population: FormControl<string>;
  coordinates: FormGroup<{
    latitude: FormControl<string>;
    longitude: FormControl<string>;
  }>;
}>;

type FormTest = FormGroup<{
  cities: FormArray<FormCity>;
}>;

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonsComponent, FormsModule, TabViewModule, DividerModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  formBuilder = inject(NonNullableFormBuilder);

  formGroupBuilt: FormTest = this.formBuilder.group({
    cities: this.formBuilder.array<FormCity>([this.generateCities()]),
  });
  cities = this.formGroupBuilt.controls.cities;
  addNewCity() {
    this.formGroupBuilt.controls.cities.push(this.generateCities());
  }
  generateCities(): FormCity {
    return this.formBuilder.group({
      cityName: this.formBuilder.control(""),
      population: this.formBuilder.control(""),
      coordinates: this.formBuilder.group({
        latitude: this.formBuilder.control(""),
        longitude: this.formBuilder.control(""),
      }),
    });
  }
  // https://www.youtube.com/watch?v=ZFAFSB9R2jc&t=66s
  // Dynamic Nested Forms Angular Explained
  // formGroupNN = this.formBuilder.group({
  //   cityName: ["", { disabled: false }],
  //   population: ["", { disabled: false }],
  //   coordinates: this.formBuilder.group({
  //     latitude: [0, { disabled: false }],
  //     longitude: [0, { disabled: false }],
  //   }),
  // });

  constructor() {}
  functioncall(e: MouseEvent) {
    console.log("event in the functioncall parent", this.formGroupBuilt.value, e);
  }

  onChange(event: Event) {
    try {
      event.preventDefault();
      event.stopPropagation();
      console.log("event in the onChange", this.formGroupBuilt);
      return;
    } catch (error) {
      console.error("Error onchange: ", error);
      return error;
    }
  }

  onSubmit() {
    console.log("Form submitted", this.formGroupBuilt.value);
  }
}

// atomic way to create form

// cityName = new FormControl({
//   value: "test SHELL",
//   disabled: false,
// });
// population = new FormControl({
//   value: -1,
//   disabled: false,
// });
// latitude = new FormControl({
//   value: 0,
//   disabled: false,
// });
// longitude = new FormControl({
//   value: 0,
//   disabled: false,
// });
// formGroup = new FormGroup({
//   cityName: this.cityName,
//   population: this.population,
//   coordinates: new FormGroup({
//     latitude: this.latitude,
//     longitude: this.longitude,
//   }),
// });
