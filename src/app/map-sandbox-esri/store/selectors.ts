import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";

export const selectStateArcGIS = (state: AppStateInterface) => state.arcGIS;
export const selectLoading = createSelector(selectStateArcGIS, arcGis => {
  console.log(" selectloading", arcGis);

  return arcGis.isLoading;
});
export const selectArcGISApiKey = createSelector(selectStateArcGIS, arcGis => {
  console.log(" selectStateArcGIS", arcGis);

  return arcGis.arcGISApiKey});
export const selectError = createSelector(selectStateArcGIS, arcGis => arcGis.error);
