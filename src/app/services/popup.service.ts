import { Injectable } from "@angular/core";

type Capitapopup = {
  name: string;
  state: string;
  population: number;
};
@Injectable({
  providedIn: "root",
})
export class PopupService {
  constructor() {}
  makePopup({ name, population, state }: Capitapopup) {
    return `<div>Capital: ${name}</div>` + `<div>State: ${state}</div>` + `<div>Population: ${population}</div>`;
  }
}
