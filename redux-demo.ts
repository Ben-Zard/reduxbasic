// const redux = require('redux');
import { legacy_createStore as createStore} from 'redux'
import redux from 'redux';

type Action = { type: "INCREMENT" }| { type: "DECREMENT" };

export type State = { count: number };

const initialState:State = { count: 0 };

const counterReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + 1
            }
        case 'DECREMENT':
            return{
                count: state.count - 1
            }
        default:
            return state;

    // if(action.type === "INCREMENT") {
    // return{
    //     count: state.count + 1
    // }}
        }
}

const store = createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(counterSubscriber);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});