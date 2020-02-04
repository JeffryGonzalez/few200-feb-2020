import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  writeCountToLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );


  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(`Got an action of type ${a.type}`))
    ), { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
