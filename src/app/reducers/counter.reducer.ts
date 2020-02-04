import { Action } from '@ngrx/store';

export interface CounterState {
  current: number;
}

export const initialState: CounterState = {
  current: 0
};

export function reducer(state: CounterState = initialState, action: Action) {
  switch (action.type) {
    case 'increment': {
      return {
        current: state.current + 1
      };
    }
    case 'decrement': {
      return {
        current: state.current - 1
      };
    }
    // because the initialState is already an Object you do not put it inside curly braces like an object
    case 'reset': {
      return initialState;
      // current: state.current = 0


    }
    default: {
      return state;
    }
  }
}
