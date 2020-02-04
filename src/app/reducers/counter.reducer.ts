import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

export const initialState: CounterState = {
  current: 0
};

const myReducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (s) => ({ current: s.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 }))
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
