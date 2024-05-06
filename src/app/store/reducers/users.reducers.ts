import { createReducer, on } from "@ngrx/store";
import { createUser, deleteUser, getUsers, updateUser } from "../actions/users.actions";
import { User } from "../../dashboard/dashboard.component";

export interface AppState {
  isLoading: boolean;
  users: User[];
  error: null;
}

export const initialState: AppState = {
  isLoading: false,
  users: [{ id: "000", name: "Sebastien", email: "seb@seb" }],
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  // on(getUser, (state, action) => ({ ...state, id: action.userId, name: action.name, email: action.email })),
  on(
    getUsers,
    (state): AppState => ({
      ...state,
      isLoading: true,
      users: [...state.users, { id: "123", name: "Sebastien", email: "seb@seb" }],
    })
  ),
  on(
    createUser,
    (state, action): AppState => ({
      ...state,
      users: [...state.users, { id: action.userId, name: action.name, email: action.email }],
    })
  ),
  on(
    updateUser,
    (state, action): AppState => ({ ...state, users: state.users.map(user => (user.id === action.id ? action : user)) })
  ),
  on(deleteUser, (state, { userId }): AppState => ({ ...state, users: state.users.filter(user => user.id !== userId) }))
);
