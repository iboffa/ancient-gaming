import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs';
import { BoxesService } from 'src/app/services/boxes-service/boxes.service';
import { loadBoxes, loadBoxesSuccess } from './boxes.actions';

@Injectable()
export class BoxesEffects {
  constructor(
    private actions$: Actions,
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
