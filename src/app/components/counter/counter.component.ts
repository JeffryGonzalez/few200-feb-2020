import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, selectCurrentCount, selectCountAtStart, selectCountingBy } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  atStart$: Observable<boolean>;
  by$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.current$ = this.store.select(s => s.counter.current);
    // this.atStart$ = this.store.select(s => s.counter.current === 0);
    this.current$ = this.store.select(selectCurrentCount);
    this.atStart$ = this.store.select(selectCountAtStart);
    this.by$ = this.store.select(selectCountingBy);

  }
  increment() {
    // this.store.dispatch({ type: 'increment' });
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    // this.store.dispatch({ type: 'decrement' });
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    // this.store.dispatch({ type: 'reset' }); used before the actions were setup
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }

}
