import { configureStore} from "@reduxjs/toolkit";
import CounterSlice from "./counter-slice";
import LoginSlice from "./auth-slice";

const store = configureStore({
  reducer: { count: CounterSlice.reducer, 
            auth: LoginSlice.reducer },
});

export default store;

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>;// Here we export the store's state






// ************Default Redux ********
// import redux from 'react-redux'
// import { legacy_createStore as createStore} from 'redux'
// import Counter from '../components/Counter/Counter';

// export type Action =
//   | { type: "INCREMENT" }
//   | { type: "DECREMENT" }
//   | { type: "TOGGLE" }
//   | { type: "INCREASE"; payload: number };

// import { legacy_createStore as createStore} from 'redux'

// export type Action = { type: "INCREMENT" }| { type: "DECREMENT" } |{type:"TOGGLE"}|{type :"INCREASE" , payload: number};

// export type State = { count: number, showCounter: boolean };

// const initialState:State = { count: 0, showCounter: true };

// const counterReducer = (state = initialState, action:Action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return{
//                 count: state.count + 1,
//                 showCounter: state.showCounter

//             }
//         case 'DECREMENT':
//             return{
//                 count: state.count - 1,
//                 showCounter: state.showCounter
//         }
//         case 'INCREASE':
//             return{
//                 count: state.count + action.payload,
//                 showCounter: state.showCounter
//             }
//         case 'TOGGLE':
//             return{
//                 showCounter: !state.showCounter,
//                 count: state.count
//             }

//         default:
//         return state;
//         }
//     }
// const store = createStore(counterReducer);
// export default store;
