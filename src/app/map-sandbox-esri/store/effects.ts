import { inject, Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getEsriApiKey, getEsriApiKeySuccess } from "./actions";
import { MapSandboxEsriService } from "@services/map-sandbox-esri.service";

@Injectable()
export class MapEsriEffects {
  private actions$ = inject(Actions);
  private mapEsriService = inject(MapSandboxEsriService);

  constructor() {}
  getArcGISApiKey$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getEsriApiKey),
      mergeMap(() => {
        return this.mapEsriService
          .getArcGisApiKey()
          .pipe(map(arcGisApiKey => getEsriApiKeySuccess({ apiKey: arcGisApiKey })));
      })
    );
  });
}
// https://www.youtube.com/watch?v=SkoI_VHtcTU&t=642s
