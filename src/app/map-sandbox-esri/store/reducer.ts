import { createReducer, on } from "@ngrx/store";
import { getEsriApiKey, getEsriApiKeyFailure, getEsriApiKeySuccess } from "./actions";

import { MapEsriStateInterface } from "../map-esri.model";

// export const initialState: AppState = {
export const initialState: MapEsriStateInterface = {
  isLoading: false,
  arcGISApiKey: "",
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  // on(getUser, (state, action) => ({ ...state, id: action.userId, name: action.name, email: action.email })),
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
);
