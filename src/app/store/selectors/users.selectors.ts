import { AppState } from "../reducers/users.reducers";

export const selectUsers = (state: AppState) => state.users;
