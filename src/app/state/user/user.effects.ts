import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/services/user-service/user.service';
import {
  loadUserData,
  loadUserDataSuccess,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loaduser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserData),
      switchMap(() =>
        this.userService
          .getUserData()
          .pipe(map((user) => loadUserDataSuccess({ user })))
      )
    );
  });
}
