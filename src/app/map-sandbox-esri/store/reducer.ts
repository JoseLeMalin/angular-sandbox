import { createFeature, createReducer, on } from "@ngrx/store";
import { getEsriApiKey, getEsriApiKeyFailure, getEsriApiKeySuccess } from "./actions";

import { MapEsriStateInterface } from "../map-esri.model";

// export const initialState: AppState = {
export const initialState: MapEsriStateInterface = {
  isLoading: false,
  arcGISApiKey: "",
  error: null,
};

// https://blog.bitsrc.io/how-ive-set-up-ngrx-feature-based-in-angular-16-with-standalone-components-cfb03ee6496d
export const mapEsriFeature = createFeature({
  name: "mapSandboxEsri",
  reducer: createReducer(
    initialState,
    on(
      getEsriApiKey,
      (state): MapEsriStateInterface => ({
        ...state,
        isLoading: true,
      })
    ),
    on(
      getEsriApiKeySuccess,
      (state, action): MapEsriStateInterface => ({
        ...state,
        isLoading: false,
        arcGISApiKey: action.apiKey,
      })
    ),
    on(
      getEsriApiKeyFailure,
      (state, action): MapEsriStateInterface => ({
        ...state,
        isLoading: false,
        error: action.error,
      })
    )
  ),
});
