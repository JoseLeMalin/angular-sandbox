import WebMap from "@arcgis/core/WebMap.js";
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import { AppStateInterface } from "../types/appState.interface";
import { Store, StoreModule } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectArcGISApiKey, selectError, selectLoading } from "./store/selectors";
import { getEsriApiKey } from "./store/actions";
import { CommonModule } from "@angular/common";
import { MapSandboxEsriService } from "@services/map-sandbox-esri.service";
import { ComponentLibraryModule } from "@arcgis/map-components-angular";
// import { defineCustomElements } from "@arcgis/map-components/dist/loader";

@Component({
  selector: "app-map-sandbox-esri",
  standalone: true,
  providers: [MapSandboxEsriService],
  imports: [CommonModule, StoreModule,
    ComponentLibraryModule,],
  
  templateUrl: "./map-sandbox-esri.component.html",
  styleUrl: "./map-sandbox-esri.component.css",
})
export class MapSandboxEsriComponent implements OnInit, OnDestroy {
  public view!: MapView;
  private apiKey!: string;
  private apiKeyBis$: Observable<string>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true })
  private mapViewEl!: ElementRef;

  constructor(private readonly store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.select(selectLoading);
    this.apiKeyBis$ = this.store.select(selectArcGISApiKey) 
    // this.store
    //   .select(selectArcGISApiKey)
    //   .subscribe(value => {
    //     this.apiKey = value;
    //     console.log("Dans le subscribe: ", this.apiKey);
    //   })
    //   .unsubscribe();
    this.error$ = this.store.select(selectError);
    console.log("Après le subscribe: ", this.apiKey);
    console.log("Après le subscribethis.apiKeyBis$: ", this.apiKeyBis$);
  }

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
   // this.initializeMap();
  }

  ngOnDestroy(): void {
    console.log("The map is destroyed");
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
