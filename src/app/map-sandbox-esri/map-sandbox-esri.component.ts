import WebMap from "@arcgis/core/WebMap.js";
import { Component, OnInit } from "@angular/core";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import { ComponentLibraryModule } from "@arcgis/map-components-angular";

@Component({
  selector: "app-map-sandbox-esri",
  standalone: true,
  imports: [ComponentLibraryModule],
  templateUrl: "./map-sandbox-esri.component.html",
  styleUrl: "./map-sandbox-esri.component.css",
})
export class MapSandboxEsriComponent {
  map = new WebMap({
    basemap: "topo-vector",
  });
  arcgisViewReadyChange(event: Event) {
    console.log("MapView ready", event);
  }
  constructor() {}
  // ngOnInit(): void {
  //   // defineCustomElements(window, {
  //   //   resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
  //   // });
  // }
}
