import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";
// import { AppState } from "../reducers/users.reducers";

export interface FeatureState {
  counter: number;
}
export const selectStateArcGIS = (state: AppStateInterface) => state.arcGIS;
export const selectLoading = createSelector(selectStateArcGIS, arcGis => arcGis.isLoading);
export const selectArcGISApiKey = createSelector(selectStateArcGIS, arcGis  => arcGis.arcGISApiKey);
export const selectError = createSelector(selectStateArcGIS, arcGis => arcGis.error);
