import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";

export const selectStateArcGIS = (state: AppStateInterface) => state.mapSandboxEsri;
export const selectLoading = createSelector(selectStateArcGIS, arcGis => arcGis.isLoading);
export const selectArcGISApiKey = createSelector(selectStateArcGIS, arcGis => arcGis.arcGISApiKey);
export const selectError = createSelector(selectStateArcGIS, arcGis => arcGis.error);
