import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";
// import { AppState } from "../reducers/users.reducers";

export interface FeatureState {
  counter: number;
}
export const selectFeature = (state: AppStateInterface) => state.users;
export const selectLoading = createSelector(selectFeature, users => users.isLoading);
export const selectUsers = createSelector(selectFeature, users => users.users);
export const selectError = createSelector(selectFeature, users => users.error);
// export interface AppState {
//   feature: FeatureState;
// }
// export const selectUsers = (state: AppState) => state.users;
// export const selectUsers = createFeatureSelector<ReadonlyArray<User>>("users");
export const selectBookCollection = createSelector(selectUsers, users => {
  console.log("Do we come here ?", users);

  return users;
});
// export const selectFeatureUsers = createSelector(
//     selectUsers,
//     (state: AppState) => state.users
//   );
