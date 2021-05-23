import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/actions/counterActions';

const Counter = props => {
  
  const counter = useSelector(state => state.counterReducers.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(counterActions.counterIncrement());
  const handleDecrement = () => dispatch(counterActions.counterDecrement());

  return (
    <>
      <h1>Counter: {counter}</h1>
      <ul>
        <li><button onClick={ handleIncrement } >Increment</button></li>
        <li><button onClick={ handleDecrement }>Decrement</button></li>
      </ul>
    </>
  )
}

export default Counter;