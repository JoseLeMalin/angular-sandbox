import { createReducer, on } from "@ngrx/store";
import dayjs from "dayjs";
import { UserStateInterface } from "../../types/users.types";
import { createUser, deleteUser, getUsers, getUsersFailure, getUsersSuccess, updateUser } from "./actions";
import { Role, User } from "../../users/users.model";

export interface AppState {
  isLoading: boolean;
  users: User[];
  error: null;
}

// export enum Role {
//   ADMIN = "admin",
//   EDITOR = "editor",
//   READER = "reader",
//   GHOST = "ghost",
// }

// export const initialState: AppState = {
export const initialState: UserStateInterface = {
  isLoading: false,
  users: [
    // {
    //   id: "000",
    //   name: "Sebastien",
    //   email: "seb@seb",
    //   createdAt: dayjs().toDate(),
    //   updatedAt: dayjs().toDate(),
    //   password: "",
    //   role: Role.READER,
    // },
  ],
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
      users: [
        ...state.users,
        {
          id: "000",
          name: "Sebastien",
          email: "seb@seb",
          createdAt: dayjs().toDate(),
          updatedAt: dayjs().toDate(),
          password: "",
          role: Role.ADMIN,
        },
      ],
    })
  ),
  on(
    getUsersSuccess,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: true,
      users: [
        ...state.users,
        ...action.users,
        // {
        //   id: "000",
        //   name: "Sebastien",
        //   email: "seb@seb",
        //   createdAt: dayjs().toDate(),
        //   updatedAt: dayjs().toDate(),
        //   password: "danslegetusersSuccess1",
        //   role: Role.ADMIN,
        // },
        // {
        //   id: "000",
        //   name: "Sebastien",
        //   email: "seb@seb",
        //   createdAt: dayjs().toDate(),
        //   updatedAt: dayjs().toDate(),
        //   password: "danslegetusersSuccess2",
        //   role: Role.ADMIN,
        // },
      ],
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
    (state, action): UserStateInterface => ({
      ...state,
      users: [
        ...state.users,
        {
          id: action.userId,
          name: action.name,
          email: action.email,
          createdAt: dayjs().toDate(),
          updatedAt: dayjs().toDate(),
          password: "the_password",
          role: Role.EDITOR,
        },
      ],
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
              createdAt: dayjs().toDate(),
              updatedAt: dayjs().toDate(),
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
