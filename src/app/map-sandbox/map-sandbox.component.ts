import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-map-sandbox",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./map-sandbox.component.html",
  styleUrl: "./map-sandbox.component.css",
})
export class MapSandboxComponent implements OnInit {
  map = L.map("map").setView([51.505, -0.09], 13);
  constructor() {}

  ngOnInit(): void {
    console.log("sdf");
  }
}
