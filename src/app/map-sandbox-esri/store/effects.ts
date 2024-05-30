import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  getEsriApiKey,
  getEsriApiKeySuccess,
} from "./actions";
import { map, mergeMap } from "rxjs";
import { MapSandboxEsriService } from "@services/map-sandbox-esri.service";

@Injectable()
export class MapEsriEffects {
  getArcGISApiKey$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEsriApiKey),
      mergeMap(() => {
        return this.mapEsriService.getArcGisApiKey().pipe(map(arcGisApiKey => getEsriApiKeySuccess({ apiKey: arcGisApiKey })));
      })
    );
  });
  
  constructor(
    private actions$: Actions,
    private mapEsriService: MapSandboxEsriService
  ) {}
}
// https://www.youtube.com/watch?v=SkoI_VHtcTU&t=642s
