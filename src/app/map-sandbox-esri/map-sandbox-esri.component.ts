import WebMap from "@arcgis/core/WebMap.js";
import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import { Store, StoreModule } from "@ngrx/store";
import { selectArcGISApiKey, selectError, selectLoading } from "./store/selectors";
import { CommonModule } from "@angular/common";
import { MapSandboxEsriService } from "@services/map-sandbox-esri.service";
import { ComponentLibraryModule } from "@arcgis/map-components-angular";
import { getEsriApiKey } from "./store/actions";
import { RouterModule } from "@angular/router";

// import { defineCustomElements } from "@arcgis/map-components/dist/loader";

@Component({
  selector: "app-map-sandbox-esri",
  standalone: true,
  providers: [MapSandboxEsriService],
  imports: [CommonModule, ComponentLibraryModule, StoreModule, RouterModule],
  template: `
    <h1>Esri Map</h1>

    @if (isLoading$ | async) {
      <div>Loading</div>
    } @else {
      @if ((apiKeyBis$ | async) !== "") {
        <div>{{ apiKeyBis$ | async }}</div>
      }
    }

    <!-- <arcgis-map  (arcgisViewReadyChange)="arcgisViewReadyChange($event)">
  <arcgis-expand>
    <arcgis-search position="top-right"></arcgis-search>
  </arcgis-expand>
  <arcgis-legend position="bottom-left"></arcgis-legend>
</arcgis-map> -->
    <!-- </div> -->
    <!-- <div #mapViewNode class="w-full h-2/3"></div> -->
  `,
  styleUrl: "./map-sandbox-esri.component.css",
})
export class MapSandboxEsriComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  public view!: MapView;
  private apiKey!: string;
  // private apiKeyBis$: Observable<string>;
  // public error$: Observable<string | null>;
  // public isLoading$: Observable<boolean>;
  public apiKeyBis$ = this.store.select(selectArcGISApiKey);
  public error$ = this.store.select(selectError);
  public isLoading$ = this.store.select(selectLoading);

  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true })
  private mapViewEl!: ElementRef;
  constructor() {}

  initializeMap() {
    const container = this.mapViewEl.nativeElement;
    console.log("Dans le initializeMap", this.apiKey);
    console.log("Dans le initializeMap this.apiKeyBis$", this.apiKeyBis$);

    const webmap = new WebMap({
      portalItem: {
        id: "aa1d3f80270146208328cf66d022e09c",
        title: "José Style",
        apiKey: this.apiKey,
      },
    });

    this.view = new MapView({
      container,
      map: webmap,
      zoom: 13,

      center: [-118.805, 34.027], // Longitude, latitude
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
  ngOnInit(): void {
    this.store.dispatch(getEsriApiKey());
    console.log("The map is inite", this.isLoading$);
    // this.initializeMap();
  }

  ngOnDestroy(): void {
    console.log("The map is destroyed", this.isLoading$);
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}

// defineCustomElements(window, {
//   resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
//
// });
// mapView: __esri.MapView;
// map = new WebMap({
//   // basemap: "topo-vector",
//   basemap: "hybrid",
// });

// arcgisViewReadyChange(event: Event) {
//   console.log("MapView ready", event);
// }

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
