import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs';
import { BoxesService } from 'src/app/services/boxes-service/boxes.service';
import { AppState } from '../app.state';
import { loadBoxes, loadBoxesSuccess } from './boxes.actions';

@Injectable()
export class BoxesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private boxesService: BoxesService
  ) {}

  loadBoxes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBoxes),
      switchMap(() =>
        this.boxesService
          .getAvailableBoxes()
          .pipe(map((boxes) => loadBoxesSuccess({ boxes })))
      )
    );
  });
}
