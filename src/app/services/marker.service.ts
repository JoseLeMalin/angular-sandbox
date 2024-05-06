import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import { PopupService } from "./popup.service";
import z from "zod";
import { catchError, of, map as rxjsMap } from "rxjs";

// type GeoJsonCapitals = {
//   type: string;
//   geometry: {
//     type: string;
//     coordinates: number[];
//   };
//   properties: {
//     state: string;
//     name: string;
//     population: number;
//   };
// };

const SchemaGeoJson = z.object({
  type: z.string(),

  features: z.array(
    z.object({
      type: z.string(),
      geometry: z.object({
        type: z.string(),
        coordinates: z.array(z.number()),
      }),
      properties: z.object({
        state: z.string(),
        name: z.string(),
        population: z.number(),
      }),
    })
  ),
});
type GeoJsonSchema = z.infer<typeof SchemaGeoJson>;

@Injectable({
  providedIn: "root",
})
export class MarkerService {
  capitals: string = "/assets/data/usa-capitals.geojson";
  constructor(
    private http: HttpClient,
    private popupService: PopupService
  ) {}
  makeCapitalMarkers(map: L.Map): void {
    console.log("Reaching here ?");
    const result$ = this.http
      .get<GeoJsonSchema[]>(this.capitals)
      .pipe(
        rxjsMap(response => {
          // https://timdeschryver.dev/blog/why-we-should-verify-http-response-bodies-and-why-we-should-use-zod-for-this#result
          console.log("response: ", response);

          const dto = SchemaGeoJson.safeParse(response);
          if (dto.success) {
            return dto.data.features;
          } else {
            console.error("dto.error: ", dto.error);
            return [];
          }
        }),
        catchError(error => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe({
        next: value => {
          value.forEach(valueItem => {
            L.marker([valueItem.geometry.coordinates[1], valueItem.geometry.coordinates[0]])
              .addTo(map)
              .bindPopup(
                this.popupService.makePopup({
                  name: valueItem.properties.name,
                  population: valueItem.properties.population,
                  state: valueItem.properties.state,
                })
              );
          });
        },
        error: err => console.error("Observable emitted an error: " + err),
        complete: () => console.log("Observable emitted the complete notification"),
      });
    console.error("result$: ", result$);
    // result.forEach(resultItem => L.marker([resultItem., ]))

    // .subscribe((res) => {
    //   for (const c of res.features) {
    //     const lon = c.geometry.coordinates[0];
    //     const lat = c.geometry.coordinates[1];
    //     const marker = L.marker([lat, lon]);
    //     marker.bindPopup(
    //       this.popupService.makePopup({
    //         name: c.properties.name,
    //         population: c.properties.population,
    //         state: c.properties.state,
    //       })
    //     );
    //     marker.addTo(map);
    //   }
    // });
  }
}
