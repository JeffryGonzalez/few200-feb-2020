import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

export const initialState: CounterState = {
  current: 0,
  by: 1
};

const myReducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by })),
  on(actions.currentSet, (s, a) => ({ ...s, current: a.current }))
);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);

  // before the reducers were available
  // switch (action.type) {
  //   case 'increment': {
  //     return {
  //       current: state.current + 1
  //     };
  //   }
  //   case 'decrement': {
  //     return {
  //       current: state.current - 1
  //     };
  //   }
  //   // because the initialState is already an Object you do not put it inside curly braces like an object
  //   case 'reset': {
  //     return initialState;
  //     // current: state.current = 0


  //   }
  //   default: {
  //     return state;
  //   }
  // }
}
