import { createSlice } from "@reduxjs/toolkit";
import { State } from "./interface";

const initialStateCounter: State = { count: 0, showCounter: true };


const CounterSlice = createSlice({
    name: "counter",
    initialState: initialStateCounter,
    reducers: {
      increment(state: State) {
        state.count++;
      },
      decrement(state: State) {
        state.count--;
      },
      increase(state: State, action: { payload: number }) {
        state.count += action.payload;
      },
      toggleCounter(state: State) {
        state.showCounter = !state.showCounter;
      },
    },
  });
  
  
  export const CounterActions = CounterSlice.actions;
  export default CounterSlice;