import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  atStart$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(s => s.counter.current);
    this.atStart$ = this.store.select(s => s.counter.current === 0);
  }
  increment() {
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }

  reset() {
    this.store.dispatch({ type: 'reset' });
  }

}
