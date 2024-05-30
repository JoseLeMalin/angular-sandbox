import WebMap from "@arcgis/core/WebMap.js";
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import { ComponentLibraryModule } from "@arcgis/map-components-angular";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";

@Component({
  selector: "app-map-sandbox-esri",
  standalone: true,
  imports: [ComponentLibraryModule],
  templateUrl: "./map-sandbox-esri.component.html",
  styleUrl: "./map-sandbox-esri.component.css",
})
export class MapSandboxEsriComponent implements OnInit, OnDestroy {
  public view!: MapView;
  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true }) private mapViewEl!: ElementRef;
  // mapView: __esri.MapView;
  map = new WebMap({
    // basemap: "topo-vector",
    basemap: "hybrid",
  });

  arcgisViewReadyChange(event: Event) {
    console.log("MapView ready", event);
  }

  // panMap = (coordinates) => {
  //   return new Promise((resolve, reject) => {
  //     this.mapView.goTo(coordinates)
  //     .then(() => {
  //       this.mapView.zoom = 18;
  //       setTimeout(() => {
  //         resolve();
  //       }, 2000);
  //     }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // }
  initializeMap() {
    const container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: "aa1d3f80270146208328cf66d022e09c",
      },
    });

    this.view = new MapView({
      container,
      map: webmap,
    });

    const bookmarks = new Bookmarks({
      view: this.view,
    });

    const bkExpand = new Expand({
      view: this.view,
      content: bookmarks,
      expanded: true,
    });

    // Add the widget to the top-right corner of the view
    this.view.ui.add(bkExpand, "top-right");

    // bonus - how many bookmarks in the webmap?
    this.view.when(() => {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log("Bookmarks: ", webmap.bookmarks.length);
      } else {
        console.log("No bookmarks in this webmap.");
      }
    });

    return this.view.when(() => console.log("mapView ready"));
  }
  constructor() {}

  ngOnInit(): void {
    // defineCustomElements(window, {
    //   resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
    //
    // });

    this.initializeMap();
  }

  ngOnDestroy(): void {
    console.log("The map is destroyed");
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
