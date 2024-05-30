import { createAction, props } from "@ngrx/store";

export const getEsriApiKey = createAction("[EsriApiKey] Get ArcGIS API Key");
export const getEsriApiKeySuccess = createAction(
  "[EsriApiKey] Get ArcGIS API Key success",
  props<{ apiKey: string }>()
);
export const getEsriApiKeyFailure = createAction(
  "[EsriApiKey] Get ArcGIS API Key failure",
  props<{ error: string }>()
);
