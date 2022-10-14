import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import  {RootState} from '../../store/index';
import { useRef } from 'react';
import { CounterActions } from '../../store/counter-slice';
const Counter = () => {
  // nomal REDUX
   const dispach = useDispatch();
   const counter = useSelector((state:RootState) => state.count.count);
   const toggle = useSelector((state:RootState) => state.count.showCounter);
  const count = useRef<HTMLInputElement>(null)
  
  const incrementHandler = () => {
    dispach( CounterActions.increment());
  };
  const decrementHandler = () => {
    dispach(CounterActions.decrement());
  };

  const increaseHandler = () => {
    const increaseby = parseInt(count.current!.value);
    dispach(CounterActions.increase(increaseby));
  };

  const toggleCounterHandler = () => {
    dispach( CounterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {toggle ? (<div className={classes.value}><h1> Lets count </h1></div>):( 
      <> 
      <div className={classes.value}>-- {counter} --</div>
      <div>
    <button onClick={incrementHandler}>Increment</button>
      <input type="number" ref={count} defaultValue = '0' />
      <button onClick={decrementHandler}>Decrement </button>
      <button  onClick={increaseHandler}>Increment by ..</button>
      </div>
      </>)}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


