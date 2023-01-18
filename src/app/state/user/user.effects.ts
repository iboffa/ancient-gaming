import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/services/user-service/user.service';
import {
  loadUserData,
  loadUserDataFailure,
  loadUserDataSuccess,
  subscribeWalletUpdate,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loaduser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserData),
      switchMap(() =>
        this.userService
          .getUserData()
          .pipe(
            map((user) =>
              user ? loadUserDataSuccess({ user }) : loadUserDataFailure()
            )
          )
      )
    );
  });

  subscribeWalletUpdate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserDataSuccess),
      tap(() => this.userService.subscribeWalletUpdate()),
      switchMap(() => of(subscribeWalletUpdate()))
    );
  });
}
