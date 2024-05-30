import { inject, Injectable } from "@angular/core";
import { map, mergeMap, tap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getEsriApiKey, getEsriApiKeySuccess } from "./actions";
import { MapSandboxEsriService } from "@services/map-sandbox-esri.service";

@Injectable()
export class MapEsriEffects {
  private actions$ = inject(Actions);
  private mapEsriService = inject(MapSandboxEsriService);

  
  getArcGISApiKey$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEsriApiKey),
      mergeMap(() => {
        console.log("Reaching le merge map ?");

        return this.mapEsriService.getArcGisApiKey().pipe(
          tap(item => console.log(`Dans le MapEsriEffects: ${item}`)),
          map(arcGisApiKey => getEsriApiKeySuccess({ apiKey: arcGisApiKey }))
        );
      })
    );
  });

  constructor() {}
}
// https://www.youtube.com/watch?v=SkoI_VHtcTU&t=642s
