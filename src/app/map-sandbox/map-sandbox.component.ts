import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-map-sandbox",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./map-sandbox.component.html",
  styleUrl: "./map-sandbox.component.css",
})
export class MapSandboxComponent implements OnInit, AfterViewInit {
  map!: L.Map; //  = L.map("map").setView([51.505, -0.09], 13);
  constructor() {
    // this.map = L.map("map").setView([51.505, -0.09], 13);
  }
  private initMap(): void {
    this.map = L.map("map", {
      center: [39.8282, -98.5795],
      zoom: 3,
    });
    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    tiles.addTo(this.map);
    const marker = L.marker([51.5, -0.09]);
    marker.addTo(this.map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

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
    const popup = L.popup().setLatLng([48.8575, 2.3514]).setContent("Ici c'est Paris").openOn(this.map);
  }
  ngOnInit(): void {
    console.log("sdf");
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
