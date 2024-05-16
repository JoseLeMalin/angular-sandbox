import { CommonModule } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import * as L from "leaflet";
import { FormComponent } from "./form/form.component";
import { MarkerService } from "@services/marker.service";

@Component({
  selector: "app-map-sandbox",
  standalone: true,
  templateUrl: "./map-sandbox.component.html",
  styleUrl: "./map-sandbox.component.css",
  imports: [CommonModule, FormComponent],
})
export class MapSandboxComponent implements AfterViewInit {
  map!: L.Map;
  constructor(private markerService: MarkerService) {
    // this.map = L.map("map").setView([51.505, -0.09], 13);
  }
  private initMap(): void {
    this.map = L.map("map", {
      center: [44.51730497097017, 3.502559682356291],
      zoom: 3,
    });
    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
    tiles.addTo(this.map);
    const marker = L.marker([44.51730497097017, 3.502559682356291]);
    marker.addTo(this.map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

    console.log("Reaching here 1 ?");
    const circle = L.circle([51.508, -0.11], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(this.map);
    circle.bindPopup("I am a circle.");
    const polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(this.map);
    polygon.bindPopup("I am a polygon.");
    L.popup().setLatLng([48.8575, 2.3514]).setContent("Ici c'est Paris").openOn(this.map);
    this.markerService.makeCapitalMarkers(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
