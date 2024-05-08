import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUsers, getUsersSuccess } from "./actions";
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
  constructor(
    private actions$: Actions,
    private usersService: UserService
  ) {}
}
// https://www.youtube.com/watch?v=SkoI_VHtcTU&t=642s
