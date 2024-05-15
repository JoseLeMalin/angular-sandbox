import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
} from "@angular/forms";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { TabViewModule } from "primeng/tabview";
import { DividerModule } from "primeng/divider";
import { map, Observable, of } from "rxjs";

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

const asyncRowValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
  console.log("We reacin' here ?");

  return of(control.value).pipe(map(value => (value === "test" ? null : { forbiddenText: "Test is not allowed" })));
};

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, ButtonsComponent, FormsModule, TabViewModule, DividerModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  formBuilder = inject(NonNullableFormBuilder);
  constructor() {}

  formGroupBuilt: FormTest = this.formBuilder.group({
    cities: this.formBuilder.array<FormCity>([this.generateCities()]),
  });
  cities = this.formGroupBuilt.controls.cities;
  addNewCity() {
    this.formGroupBuilt.controls.cities.push(this.generateCities());
  }
  generateCities(): FormCity {
    return this.formBuilder.group({
      // cityName: this.formBuilder.control("", { validators: [Validators.required, Validators.minLength(2)] }),
      cityName: this.formBuilder.control("", { asyncValidators: [asyncRowValidator] }),
      population: this.formBuilder.control("qsd"),
      coordinates: this.formBuilder.group({
        latitude: this.formBuilder.control("qsd"),
        longitude: this.formBuilder.control("qsd"),
      }),
    });
  }

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
