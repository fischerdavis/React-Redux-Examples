import counterReducer from "./counter";
import {combineReducers} from 'redux';
import loggedReducer from "./isLogged";

// Basically what happens is as in the name combineReducers just combines all the reducers into one huge switch statement.
// ** That is my assumption as to what happens.

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers;
