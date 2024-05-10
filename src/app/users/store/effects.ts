import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createUser, createUserSuccess, getUsers, getUsersSuccess, updateUser, updateUserSuccess } from "./actions";
import { map, mergeMap } from "rxjs";
import { UserService } from "../../services/user.service";

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsers),
      mergeMap(() => {
        return this.usersService.getUsers().pipe(map(users => getUsersSuccess({ users: users })));
      })
    );
  });
  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUser),
      mergeMap(newUser => {
        return this.usersService.createUser(newUser.user).pipe(map(user => createUserSuccess({ user })));
      })
    );
  });
  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUser),
      mergeMap(updatedUser => {
        return this.usersService.updateUser(updatedUser.user.id).pipe(map(user => updateUserSuccess({ user: user })));
      })
    );
  });
  constructor(
    private actions$: Actions,
    private usersService: UserService
  ) {}
}
// https://www.youtube.com/watch?v=SkoI_VHtcTU&t=642s
