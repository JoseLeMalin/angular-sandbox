import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";
// import { AppState } from "../reducers/users.reducers";

// export interface FeatureState {
//   counter: number;
// }
export const selectStateUsers = (state: AppStateInterface) => state.users;
export const selectLoading = createSelector(selectStateUsers, users => {
  console.log("users loading", users);

  return users.isLoading;
});

export const selectUsers = createSelector(selectStateUsers, users => users.users);
export const selectError = createSelector(selectStateUsers, users => users.error);

export const selectBookCollection = createSelector(selectUsers, users => {
  console.log("Do we come here ?", users);

  return users;
});
