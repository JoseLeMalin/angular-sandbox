import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUser } from "../actions/users.actions";
import { mergeMap } from "rxjs";
import { UserService } from "../../services/user.service";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UserService
  ) {}
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      mergeMap(() =>
        this.usersService
          .getUsers
          // https://www.youtube.com/watch?v=SkoI_VHtcTU&t=642s
          ()
      )
    )
  );
}
