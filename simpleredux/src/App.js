import React from "react";

// This is how you access the state from the store (useSelector)
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";

// Read the description in reducers/index.


function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>


        {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}

    </div>
  );
}

export default App;
