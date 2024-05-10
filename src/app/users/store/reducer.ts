import { createReducer, on } from "@ngrx/store";
import dayjs from "dayjs";

import {
  createUser,
  createUserFailure,
  createUserSuccess,
  deleteUser,
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  updateUser,
} from "./actions";
import { Role, User, UserStateInterface } from "../users.model";

export interface AppState {
  isLoading: boolean;
  users: User[];
  error: null;
}

// export const initialState: AppState = {
export const initialState: UserStateInterface = {
  isLoading: false,
  users: [],
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  // on(getUser, (state, action) => ({ ...state, id: action.userId, name: action.name, email: action.email })),
  on(
    getUsers,
    (state): UserStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUsersSuccess,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: true,
      users: [...state.users, ...action.users],
    })
  ),
  on(
    getUsersFailure,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    createUser,
    (state): UserStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    createUserSuccess,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      users: [...state.users, action.user],
    })
  ),
  on(
    createUserFailure,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    updateUser,
    (state, action): UserStateInterface => ({
      ...state,
      users: state.users.map(user =>
        user.id === action.id
          ? {
              ...action,
              createdAt: dayjs().toString(),
              updatedAt: dayjs().toString(),
              password: "the_password-updated",
              role: Role.EDITOR,
            }
          : user
      ),
    })
  ),
  on(
    deleteUser,
    (state, { userId }): UserStateInterface => ({ ...state, users: state.users.filter(user => user.id !== userId) })
  )
);
