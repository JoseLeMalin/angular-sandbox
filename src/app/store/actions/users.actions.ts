import { createAction, props } from "@ngrx/store";

export const getUser = createAction(
  "[Dashboard Page] Get single user with ID",
  props<{ userId: string; name: string; email: string }>()
);
export const getUsers = createAction(
  "[Dashboard Page] Get all users",
);
export const createUser = createAction(
  "[Dashboard Page] Create a new user",
  props<{ userId: string; name: string; email: string }>()
);
export const updateUser = createAction(
  "[Dashboard Page] Update an existing user",
  props<{ id: string; name: string; email: string }>()
);
export const deleteUser = createAction("[Dashboard Page] Delete an existing user", props<{ userId: string }>());
