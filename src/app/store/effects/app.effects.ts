import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { AppHttpService } from 'src/app/service/app.service';
import * as appActions from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private httpService: AppHttpService) {}

  test$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(appActions.test),
        map(() => {
          console.log('test');
        })
      ),
    { dispatch: false } //use with an effect which does not dispatch another action
  );

  public testHttp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.testHttp),
      mergeMap(() =>
        this.httpService.testFetch().pipe(
          map((data) => appActions.testHttpSuccess({ data })),
          catchError((error) =>
            of(
              appActions.testHttpError({
                error,
              })
            )
          )
        )
      )
    )
  );
}
