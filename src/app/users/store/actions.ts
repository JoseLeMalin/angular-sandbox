import { createAction, props } from "@ngrx/store";
import { CreateUser, UpdateUser, User } from "../users.model";

export const getUser = createAction(
  "[Users] Get single user with ID",
  props<{ userId: string; name: string; email: string }>()
);
export const getUsers = createAction("[Users] Get all users");
export const getUsersSuccess = createAction("[Users] Get all users success", props<{ users: User[] }>());
export const getUsersFailure = createAction("[Users] Get all users failure", props<{ error: string }>());

export const createUser = createAction("[Users] Create new user", props<{ user: CreateUser }>());
export const createUserSuccess = createAction("[Users] Create new user success", props<{ user: User }>());
export const createUserFailure = createAction("[Users] Create new user failure", props<{ error: string }>());

export const updateUser = createAction("[Users] Update an existing user", props<{ user: UpdateUser }>());
export const updateUserSuccess = createAction("[Users] Update an existing user success", props<{ user: User }>());
export const updateUserFailure = createAction("[Users] Update an existing user failure", props<{ error: string }>());
export const deleteUser = createAction("[Users] Delete an existing user", props<{ userId: string }>());
